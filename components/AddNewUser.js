import { useState } from 'react'
import Button from '@mui/material/Button';
import { addUser } from '../api-helpers/frontend/utils';
import styles from "../styles/rigster.module.css"
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import { registerCheckIfHaveThisUserInDataBase } from "../api-helpers/frontend/utils"



const AddNewUser = ({ closeModel }) => {


    const [checkIfHaveThisUserInDataBase, setCheckIfHaveThisUserInDataBase] = useState("");
    const [clickNumButton, setClickNumButton] = useState(1);
    const [disabled, setDisabled] = useState(false);

    const [showAlertUserRegister, setShowAlertUserRegister] = useState(false);
    const [showAlertUserRegisterNeedInputValue, setShowAlertUserRegisterNeedInputValue] = useState(false);
    const [showAlertHaveLoginInDatabase, setShowAlertShowAlertHaveLoginInDatabase] = useState(false);


    const [inputs, setInputs] = useState(
        {
            name: "",
            login: "",
            password: "",
            confirmPassword: "",
            avatarUser: "https://i.postimg.cc/SQ9RXBN9/imgbin-astronaut-avatar-png"
        }
    );



    const handleChange = (e) => {

        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }



    const checkIfValueAllNotEmpty = () => {

        if (inputs.password != inputs.confirmPassword ||
            inputs.password.length < 6 && inputs.confirmPassword.length < 6 ||
            inputs.login == '' ||
            inputs.password == '' ||
            inputs.name == '') {
            setShowAlertUserRegisterNeedInputValue(true);
        }

        else {
            registerNewUser()
        }
    }



    const registerNewUser = async () => {

        registerCheckIfHaveThisUserInDataBase(inputs.login)
            .then((dataCategory) => setCheckIfHaveThisUserInDataBase(dataCategory))
            .catch((err) => console.log(err));

        setClickNumButton((clickNumButton) => clickNumButton + 1)

        if (clickNumButton >= 2) {

            if (checkIfHaveThisUserInDataBase) {
                setShowAlertShowAlertHaveLoginInDatabase(true);
                setDisabled(true);
                setCheckIfHaveThisUserInDataBase("");
            }

            else {
                setDisabled(true);
                addUser(inputs)
                    .then((value) => console.log(value))
                    .then(() => {
                        setShowAlertUserRegister(true);
                    })
                    .catch(err => console.log(err));
            }
        }
    }




    return (
        <>

            <div className={styles.modelRegister}>

                <div className={styles.form}>
                    <div className={styles.header}>

                        <Button onClick={closeModel}
                            variant="contained"
                            sx={{ bgcolor: 'rgba(255, 0, 0, 0.600)', '&:hover': { bgcolor: 'rgba(255, 0, 0, 0.500)' } }}>
                            X
                        </Button>

                        <div className={styles.styleTitleRegister} >
                            <h1>Register</h1>
                        </div>

                        <div className={styles.image}></div>
                    </div>
                    <div className="body-form">

                        <form>
                            <div className="input-group mb-3">
                                <div className={styles.input}>
                                    <span className="input-group-text"><i className="fa fa-grin"></i></span>
                                </div>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Login"
                                    onChange={handleChange}
                                    value={inputs.login}
                                    name="login"
                                />
                            </div>

                            <div className="input-group mb-3">
                                <div className={styles.input}>
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                </div>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    onChange={handleChange}
                                    value={inputs.name}
                                    name="name"
                                />
                            </div>


                            <div className="input-group mb-3">
                                <div className={styles.input}>
                                    <span className="input-group-text"><i className="fa fa-key"></i></span>
                                </div>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    value={inputs.password}
                                    name="password"
                                />
                            </div>


                            <div className="input-group mb-3">
                                <div className={styles.input}>
                                    <span className="input-group-text"><i className="fa fa-key"></i></span>
                                </div>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    value={inputs.confirmPassword}
                                    name="confirmPassword"
                                />
                            </div>

                            <br />

                            <div className={styles.RegisterInOrCloseButtom}>
                                <Button disabled={disabled} onClick={checkIfValueAllNotEmpty} variant="contained" >
                                    Let's Register
                                </Button>
                            </div>

                            <div className={styles.ClickTwice}>
                                <p>* Click twice when Register</p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>




            {showAlertUserRegister && (
                <Snackbar
                    open={showAlertUserRegister}
                    autoHideDuration={1500}
                    onClose={() => {
                        setShowAlertUserRegister(false)
                        window.location.reload(false);
                    }}>
                    <Alert
                        variant="filled" severity="success"
                        sx={{ width: '100%', fontSize: "17px", textAlign: "center" }}>
                        You have successfully registered
                    </Alert>
                </Snackbar>
            )}


            {showAlertUserRegisterNeedInputValue && (
                <Snackbar
                    open={showAlertUserRegisterNeedInputValue}
                    autoHideDuration={1500}
                    onClose={() => {
                        setShowAlertUserRegisterNeedInputValue(false)
                    }}>
                    <Alert
                        variant="filled" severity="warning"
                        sx={{ width: '100%', fontSize: "17px", textAlign: "center" }}>
                        input all value or Incorrect input
                    </Alert>
                </Snackbar>
            )}


            {showAlertHaveLoginInDatabase && (
                <Snackbar
                    open={showAlertHaveLoginInDatabase}
                    autoHideDuration={3500}
                    onClose={() => {
                        setShowAlertShowAlertHaveLoginInDatabase(false)
                        closeModel()
                    }}>
                    <Alert
                        variant="filled" severity="warning"
                        sx={{ width: '100%', fontSize: "17px", textAlign: "center" }}>
                        Have This Login in database ! <br />
                        Wait Model Register closed<br />
                        Try Again

                    </Alert>
                </Snackbar>
            )}
        </>
    )
}

export default AddNewUser