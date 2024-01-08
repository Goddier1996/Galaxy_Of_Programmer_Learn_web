import styles from "./css/profileUser.module.css"
import { useState } from 'react'
import { updateUser } from '../../api-helpers/frontend/utils';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import SnackBarShow from "../tools/SnackBarShow";



const UpdateProfileUser = ({ hideUpdate, dataUser }) => {


    const router = useRouter();

    const [showAlertUpdateProfileUser, setShowAlertUpdateProfileUser] = useState(false);
    const [showAlertDemoUserUpdate, setShowAlertDemoUserUpdate] = useState(false);


    const [inputs, setInputs] = useState(
        {
            name: dataUser.name,
            login: dataUser.login,
            password: dataUser.password,
            confirmPassword: dataUser.confirmPassword,
            avatarUser: dataUser.avatarUser
        }
    );


    const handleChange = (e) => {

        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }



    const UpdateNewDataUser = async () => {

        // demo user cant update data !
        if (dataUser.login == process.env.DEMO_LOGIN) {
            setShowAlertDemoUserUpdate(true);
        }

        else {
            await updateUser(dataUser._id, inputs)
            await setShowAlertUpdateProfileUser(true)
            await router.push("/")
            window.location.reload(false);
            sessionStorage.clear();
        }
    }



    return (
        <>
            <div className={styles.modelRegister}>
                <div className={styles.modelStyleUpdate}>

                    <div className={styles.header}>

                        <Button onClick={hideUpdate}
                            variant="contained"
                            sx={{ bgcolor: 'rgba(255, 0, 0, 0.600)', '&:hover': { bgcolor: 'rgba(255, 0, 0, 0.500)' } }}
                        >
                            X
                        </Button>

                        <div className={styles.styleTitleRegister} >
                            <h1>Update Personal Data {dataUser.name}</h1>
                        </div>

                        <div className={styles.image}></div>
                    </div>


                    <div className={styles.bodySpaceInput}>
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

                        </form>
                    </div>

                    <div className={styles.updateUserData}>
                        <Button
                            onClick={UpdateNewDataUser}
                            variant="contained">
                            Let's Update
                        </Button>
                    </div>

                </div>
            </div>


            {/* here alerts if error and more , Update user data */}
            {showAlertUpdateProfileUser && (
                <SnackBarShow
                    showAlert={showAlertUpdateProfileUser}
                    setShowAlert={() => setShowAlertUpdateProfileUser(false)}
                    typeMessage={"The data was updated successfully"}
                    typeAlert={"success"}
                    func={null}
                />
            )}


            {showAlertDemoUserUpdate && (
                <SnackBarShow
                    showAlert={showAlertDemoUserUpdate}
                    setShowAlert={() => setShowAlertDemoUserUpdate(false)}
                    typeMessage={"Demo User Can't updated Data !"}
                    typeAlert={"info"}
                    func={hideUpdate}
                />
            )}
        </>
    )
}

export default UpdateProfileUser;