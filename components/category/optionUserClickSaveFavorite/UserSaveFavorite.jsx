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
          setShow={() => setShowAlertUserAddFavorite}
          text={"favorite save"}
          type={type}
          title={title}
        />
      )}

      {showAlertUserNeedConnectToAddFavorite && (
        <ShowAlertFavorite
          showAlert={showAlertUserNeedConnectToAddFavorite}
          setShow={() => setShowAlertUserNeedConnectToAddFavorite}
          text={"Please SignIn Or Register"}
          type={""}
          title={""}
        />
      )}

      {showAlertUserHaveThisFavorite && (
        <ShowAlertFavorite
          showAlert={showAlertUserHaveThisFavorite}
          setShow={() => setShowAlertUserHaveThisFavorite}
          text={"You Have This Favorite"}
          type={""}
          title={""}
        />
      )}
    </>
  );
};


export default UserSaveFavorite;