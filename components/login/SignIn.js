import { useState } from 'react'
import styles from "../../styles/SignIn.module.css"
import { signInUser } from '../../api-helpers/frontend/utils';
import { Button } from '@mui/material';
import SnackBarShow from '../tools/SnackBarShow';



const SignIn = ({ hideSignInFun }) => {


    const [showAlertEmptyValueLogin, setShowAlertEmptyValueLogin] = useState(false);
    const [showAlertUserEmptyInDatabase, setShowAlertUserEmptyInDatabase] = useState(false);
    const [showAlertUserConnect, setShowAlertUserConnect] = useState(false);

    const [disabledSignInButton, setDisabledSignInButton] = useState(false);

    const [login, SetLogin] = useState('');
    const [password, setPassword] = useState('');



    const connectDemoUser = () => {

        let user = {
            login: process.env.DEMO_LOGIN,
            password: process.env.DEMO_PASSWORD
        }

        signInUser(user)
            .then((value) => console.log(value))
            .then(() => {
                setDisabledSignInButton(true);
                setShowAlertUserConnect(true);
            })
            .catch(err => console.log(err));
    }



    const SignIn = async () => {

        let user =
        {
            login,
            password
        }

        signInUser(user)
            .then(() => {
                let userData = JSON.parse(window.sessionStorage.getItem("user"));

                if (userData.connectUser == null) {
                    setShowAlertUserEmptyInDatabase(true);
                    sessionStorage.clear();
                }

                else {
                    setDisabledSignInButton(true);
                    setShowAlertUserConnect(true);
                }
            })
            .catch(err => console.log(err));
    }



    const checkValueInput = () => {

        if (login === '' || password === '') {
            setShowAlertEmptyValueLogin(true);
            return;
        }

        else if (login && password) {
            SignIn();
        }

    }





    return (

        <div className={styles.animationOpenPopUp}>
            <div className={styles.modelRegister}>

                <div className={styles.form}>
                    <div className={styles.header}>

                        <Button disabled={disabledSignInButton} onClick={hideSignInFun}
                            variant="contained"
                            sx={{ bgcolor: 'rgba(255, 0, 0, 0.600)', '&:hover': { bgcolor: 'rgba(255, 0, 0, 0.500)' } }} >
                            X
                        </Button>

                        <div className={styles.styleTitleRegister} >
                            <h1>Sign In</h1>
                        </div>

                        <div className={styles.image}></div>
                    </div>
                    <div className="body-form">

                        <form>
                            <div className="input-group mb-3 ">
                                <div className={styles.input}>
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                </div>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Login"
                                    onChange={(event) => SetLogin(event.target.value)}
                                    value={login}
                                    name="login"
                                />
                            </div>

                            <div className="input-group mb-3">
                                <div className={styles.input}>
                                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                </div>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={(event) => setPassword(event.target.value)}
                                    value={password}
                                    name="password"
                                    autoComplete="off"
                                />
                            </div>

                            <br />

                            <div className={styles.RegisterInOrCloseButtom}>
                                <Button disabled={disabledSignInButton} onClick={() => checkValueInput()} variant="contained" >
                                    Sign In
                                </Button>
                            </div>


                            <div className={styles.DemoUser}>
                                <p style={(disabledSignInButton === true) ? { color: "rgba(0, 0, 0, 0.1)", cursor: "none" } :
                                    { color: "#ffffff" }}
                                    onClick={() => connectDemoUser()}
                                >
                                    Click to Connect Demo User
                                </p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>



            {/* show alert when user connect */}
            {showAlertEmptyValueLogin && (
                <SnackBarShow
                    showAlert={showAlertEmptyValueLogin}
                    setShowAlert={() => setShowAlertEmptyValueLogin(false)}
                    typeMessage={"input all value (Incorrect input) !"}
                    typeAlert={"warning"}
                    func={null}
                />
            )}


            {showAlertUserEmptyInDatabase && (
                <SnackBarShow
                    showAlert={showAlertUserEmptyInDatabase}
                    setShowAlert={() => setShowAlertUserEmptyInDatabase(false)}
                    typeMessage={"Don't Have This User In Database !"}
                    typeAlert={"warning"}
                    func={null}
                />
            )}


            {showAlertUserConnect && (
                <SnackBarShow
                    showAlert={showAlertUserConnect}
                    setShowAlert={() => setShowAlertUserConnect(false)}
                    typeMessage={"Welcome you Connect, Let's Learn new technology"}
                    typeAlert={"success"}
                    func={null}
                />
            )}
        </div>
    )
}

export default SignIn;