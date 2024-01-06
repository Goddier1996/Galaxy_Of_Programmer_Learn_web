import { useEffect, useState } from "react";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import styles from "../infoCategoryPage.module.css";
import { SaveFavorite } from "./function/SaveFavoride";
import ShowAlertFavorite from "./alerts/ShowAlertFavorite";


const UserSaveFavorite = ({ favorite, title, type, idFavorite }) => {


  const [showAlertUserAddFavorite, setShowAlertUserAddFavorite] =
        useState(false);
    
  const [
    showAlertUserNeedConnectToAddFavorite,
    setShowAlertUserNeedConnectToAddFavorite,
    ] = useState(false);
    
  const [showAlertUserHaveThisFavorite, setShowAlertUserHaveThisFavorite] =
    useState(false);

  const [dataUser, setDataUser] = useState({});

  const dataInfoSave = {
    favorite: favorite,
    title: title,
    type: type,
    idFavorite: idFavorite,
  };

    
  useEffect(() => {
    let userData = JSON.parse(window.sessionStorage.getItem("user"));

    if (userData != null) {
      setDataUser(userData.connectUser);
    } else {
      setDataUser();
    }
  }, []);

    
  return (
    <>
      {/* here save data to Favorite user */}
      <b className={styles.SaveBookMarkInfoUser}>
        <BookmarkAddIcon
          onClick={() =>
            SaveFavorite(
              dataUser,
              dataInfoSave,
              setShowAlertUserAddFavorite,
              setShowAlertUserHaveThisFavorite,
              setShowAlertUserNeedConnectToAddFavorite
            )
          }
          className={styles.buttonSave}
        />
      </b>

      {showAlertUserAddFavorite && (
        <ShowAlertFavorite
          showAlert={showAlertUserAddFavorite}
          setShow={setShowAlertUserAddFavorite}
          text={null}
          type={type}
        />
      )}

      {showAlertUserNeedConnectToAddFavorite && (
        <ShowAlertFavorite
          showAlert={showAlertUserNeedConnectToAddFavorite}
          setShow={setShowAlertUserNeedConnectToAddFavorite}
          text={"Please SignIn Or Register"}
          type={null}
        />
      )}

      {showAlertUserHaveThisFavorite && (
        <ShowAlertFavorite
          showAlert={showAlertUserHaveThisFavorite}
          setShow={setShowAlertUserHaveThisFavorite}
          text={"You Have This Favorite"}
          type={null}
        />
      )}
    </>
  );
};


export default UserSaveFavorite;