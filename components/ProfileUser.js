import styles from "../styles/profileUser.module.css"
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import UpdateProfileUser from "./UpdateProfileUser";



const ProfileUser = ({ hideSignInFun }) => {


    const [SaveDataUserFromSessionStorage, setSaveDataUserFromSessionStorage] = useState({});

    const handleShowModelUpdate = () => setShowModelUpdate(true);
    const [showModelUpdate, setShowModelUpdate] = useState(false);


    const UpdateProfileUser1 = () => {

        handleShowModelUpdate();
    }



    const hideModelProfileUser = () => {
        setShowModelUpdate(false);
    }




    useEffect(() => {

        let userData = JSON.parse(window.sessionStorage.getItem("user"));

        if (userData != null) {
            setSaveDataUserFromSessionStorage(userData.connectUser);
        }

        else {
            setSaveDataUserFromSessionStorage()
        }

    }, []);





    return (
        <>
            <div className={styles.modelRegister}>

                <div className={styles.modelStyle}>

                    <div className={styles.header}>

                        <Button onClick={hideSignInFun}
                            variant="contained"
                            sx={{ bgcolor: 'rgba(255, 0, 0, 0.600)', '&:hover': { bgcolor: 'rgba(255, 0, 0, 0.500)' } }}>
                            X
                        </Button>

                        <div className={styles.styleTitleRegister} >
                            <h1>Hi {SaveDataUserFromSessionStorage.name} Here Your Profile</h1>
                        </div>

                        <div className={styles.image}></div>
                    </div>


                    <div className={styles.bodySpaceAvatar}>
                        <img
                            src={SaveDataUserFromSessionStorage.avatarUser}
                            alt="avatar user profile"
                            width={120}
                            height={120}
                        />
                    </div>

                    <div className={styles.bodySpaceInfoUser}>

                        <p>Name : {SaveDataUserFromSessionStorage.name}</p>
                        <p>Login : {SaveDataUserFromSessionStorage.login}</p>

                    </div>


                    <div className={styles.updateUserData}>

                        <Button onClick={UpdateProfileUser1}
                            variant="contained">
                            Update your Profile
                        </Button>

                    </div>

                </div>
            </div>


            {/* model popup show Sign in */}
            <Modal show={showModelUpdate} >
                <UpdateProfileUser hideUpdate={hideModelProfileUser} dataUser={SaveDataUserFromSessionStorage} />
            </Modal>
        </>
    )
}

export default ProfileUser