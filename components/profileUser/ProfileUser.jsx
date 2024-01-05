import styles from "./css/profileUser.module.css"
import { useState, useEffect } from 'react'
import UpdateProfileUser from "./UpdateProfileUser";
import { Modal, Button } from '@mui/material';
import ShowInfoUserProfile from "./ShowInfoUserProfile";



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
    });



    return (
        <>
            <div className={styles.modelRegister}>

                <div className={styles.modelStyle}>

                    <ShowInfoUserProfile
                        hideSignInFun={hideSignInFun}
                        name={SaveDataUserFromSessionStorage.name}
                        avatarUser={SaveDataUserFromSessionStorage.avatarUser}
                        login={SaveDataUserFromSessionStorage.login}
                    />

                    <div className={styles.updateUserData}>

                        <Button onClick={UpdateProfileUser1}
                            variant="contained">
                            Update your Profile
                        </Button>

                    </div>
                </div>
            </div>


            {/* model popup show Update Profile */}
            <Modal open={showModelUpdate} >
                <UpdateProfileUser hideUpdate={hideModelProfileUser} dataUser={SaveDataUserFromSessionStorage} />
            </Modal>
        </>
    )
}

export default ProfileUser