import { useState } from 'react'
import Button from '@mui/material/Button';
import styles from "../styles/SignIn.module.css"
import { signInUser } from '../api-helpers/frontend/utils';
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';



const SignIn = ({ hideSignInFun }) => {


    const [showAlertEmptyValueLogin, setShowAlertEmptyValueLogin] = useState(false);
    const [showAlertUserEmptyInDatabase, setShowAlertUserEmptyInDatabase] = useState(false);



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
                window.location.reload(false);
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

                else
                    window.location.reload(false);
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

        <>
            <div className={styles.modelRegister}>

                <div className={styles.form}>
                    <div className={styles.header}>

                        <Button onClick={hideSignInFun}
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
                                />
                            </div>

                            <br />

                            <div className={styles.RegisterInOrCloseButtom}>
                                <Button onClick={() => checkValueInput()} variant="contained" >
                                    Sign In
                                </Button>
                            </div>


                            <div className={styles.DemoUser}>
                                <p onClick={() => connectDemoUser()}>Click to Connect Demo User</p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>




            {showAlertEmptyValueLogin && (
                <Snackbar
                    open={showAlertEmptyValueLogin}
                    autoHideDuration={1500}
                    onClose={() => {
                        setShowAlertEmptyValueLogin(false)
                    }}>


                    <Alert
                        variant="filled" severity="warning"
                        sx={{ width: '100%', fontSize: "17px", textAlign: "center" }}>
                        input all value (Incorrect input) !
                    </Alert>
                </Snackbar>
            )}



            {showAlertUserEmptyInDatabase && (
                <Snackbar
                    open={showAlertUserEmptyInDatabase}
                    autoHideDuration={1500}
                    onClose={() => {
                        setShowAlertUserEmptyInDatabase(false)
                    }}>


                    <Alert
                        variant="filled" severity="warning"
                        sx={{ width: '100%', fontSize: "17px", textAlign: "center" }}>
                        Don't Have This User In Database !
                    </Alert>
                </Snackbar>
            )}
        </>
    )

}

export default SignIn