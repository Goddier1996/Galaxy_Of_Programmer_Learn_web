import { useState } from "react";
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

  const [dataInfoSave] = useState({
    favorite: favorite,
    title: title,
    type: type,
    idFavorite: idFavorite,
  });

    
    
  return (
    <>
      <b className={styles.SaveBookMarkInfoUser}>
        <BookmarkAddIcon
          onClick={() =>
            SaveFavorite(
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
          setShow={() => setShowAlertUserAddFavorite(false)}
          text={"favorite save"}
          type={dataInfoSave.type}
          title={dataInfoSave.title}
          typeAlert={"success"}
        />
      )}

      {showAlertUserNeedConnectToAddFavorite && (
        <ShowAlertFavorite
          showAlert={showAlertUserNeedConnectToAddFavorite}
          setShow={() => setShowAlertUserNeedConnectToAddFavorite(false)}
          text={"Please SignIn Or Register"}
          type={""}
          title={""}
          typeAlert={"warning"}
        />
      )}

      {showAlertUserHaveThisFavorite && (
        <ShowAlertFavorite
          showAlert={showAlertUserHaveThisFavorite}
          setShow={() => setShowAlertUserHaveThisFavorite(false)}
          text={"You Have This Favorite"}
          type={""}
          title={""}
          typeAlert={"warning"}
        />
      )}
    </>
  );
};


export default UserSaveFavorite;