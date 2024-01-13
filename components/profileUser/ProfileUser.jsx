import styles from "./css/profileUser.module.css";
import { useState, useEffect } from "react";
import UpdateProfileUser from "./UpdateProfileUser";
import { Modal, Button } from "@mui/material";
import ShowInfoUserProfile from "./ShowInfoUserProfile";
import { OpenCloseModelsPopUpAndAlert } from "../../customHook/OpenCloseModelsPopUp";



const ProfileUser = ({ hideSignInFun }) => {


  const [SaveDataUserFromSessionStorage, setSaveDataUserFromSessionStorage] =
    useState({});

  // open model pop up Model Update , custom hook
  const { showModel, handleShowModel, handleCloseModel } = OpenCloseModelsPopUpAndAlert();


  useEffect(() => {
    
    let userData = JSON.parse(window.sessionStorage.getItem("user"));

    if (userData != null) {
      setSaveDataUserFromSessionStorage(userData.connectUser);
    } else {
      setSaveDataUserFromSessionStorage();
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
            <Button onClick={handleShowModel} variant="contained">
              Update your Profile
            </Button>
          </div>
        </div>
      </div>

      {/* model popup show Update Profile */}
      <Modal open={showModel}>
        <UpdateProfileUser
          hideUpdate={() => handleCloseModel()}
          dataUser={SaveDataUserFromSessionStorage}
        />
      </Modal>
    </>
  );
};


export default ProfileUser;