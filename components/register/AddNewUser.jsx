import { useState } from 'react'
import { addUser } from '../../api-helpers/frontend/utils';
import styles from "./register.module.css"
import { Button } from '@mui/material';
import { registerCheckIfHaveThisUserInDataBase } from "../../api-helpers/frontend/utils"
import RobotBox from '../ReCAPTCHA/RobotBox';
import SnackBarShow from '../tools/SnackBarShow';



const AddNewUser = ({ closeModel }) => {


    const [checkIfHaveThisUserInDataBase, setCheckIfHaveThisUserInDataBase] = useState("");
    const [clickNumButton, setClickNumButton] = useState(1);
    const [disabledRegesterButton, setDisabledRegesterButton] = useState(false);
    const [disabledCloseButton, setDisabledCloseButton] = useState(false);

    const [showAlertUserRegister, setShowAlertUserRegister] = useState(false);
    const [showAlertUserRegisterNeedInputValue, setShowAlertUserRegisterNeedInputValue] = useState(false);
    const [showAlertHaveLoginInDatabase, setShowAlertShowAlertHaveLoginInDatabase] = useState(false);


    const [inputs, setInputs] = useState(
        {
            name: "",
            login: "",
            password: "",
            confirmPassword: "",
            avatarUser: "https://i.postimg.cc/90N7bp8f/imgbin-astronaut-avatar-png.png"
        }
    );

    // check box if user not robot
    const [capVal, setCapVal] = useState(false);



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
            registerNewUser();
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
                setDisabledRegesterButton(false);
                setCheckIfHaveThisUserInDataBase("");
            }

            else {
                setDisabledRegesterButton(true);
                setDisabledCloseButton(true);
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

        <div className={styles.animationOpenPopUp}>
            <div className={styles.modelRegister}>

                <div className={styles.form}>
                    <div className={styles.header}>

                        <Button disabled={disabledCloseButton} onClick={closeModel}
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
                                    autoComplete="off"
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
                                    autoComplete="off"
                                />
                            </div>


                            {/* check box if user dont robot */}
                            <div className={styles.checkBox}>
                                <RobotBox activeRobotBox={() => setCapVal(true)} />
                            </div>


                            <div className={styles.RegisterInOrCloseButtom}>
                                <Button disabled={!capVal ? !capVal : disabledRegesterButton}
                                    onClick={checkIfValueAllNotEmpty} variant="contained">
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



            {/* here alerts if error and more , show when user input value register */}
            {showAlertUserRegister && (
                <SnackBarShow
                    showAlert={showAlertUserRegister}
                    setShowAlert={() => setShowAlertUserRegister(false)}
                    typeMessage={"You have successfully registered"}
                    typeAlert={"success"}
                    func={null}
                />
            )}


            {showAlertUserRegisterNeedInputValue && (
                <SnackBarShow
                    showAlert={showAlertUserRegisterNeedInputValue}
                    setShowAlert={() => setShowAlertUserRegisterNeedInputValue(false)}
                    typeMessage={"input all value or Incorrect input"}
                    typeAlert={"warning"}
                    func={null}
                />
            )}


            {showAlertHaveLoginInDatabase && (
                <SnackBarShow
                    showAlert={showAlertHaveLoginInDatabase}
                    setShowAlert={() => setShowAlertShowAlertHaveLoginInDatabase(false)}
                    typeMessage={"Have This Login in database! Wait Model Register closed, Try Again"}
                    typeAlert={"warning"}
                    func={closeModel}
                />
            )}
        </div>
    )
}

export default AddNewUser