import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
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
      setShow={()=>setShowAlertUserAddFavorite(false)}
      text={"favorite save"}
      type={dataInfoSave.type}
      title={dataInfoSave.title}
      typeAlert={"success"}
    />
  )}

  {showAlertUserNeedConnectToAddFavorite && (
    <ShowAlertFavorite
      showAlert={showAlertUserNeedConnectToAddFavorite}
      setShow={()=>setShowAlertUserNeedConnectToAddFavorite(false)}
      text={"Please SignIn Or Register"}
      type={""}
      title={""}
      typeAlert={"warning"}
    />
  )}

  {showAlertUserHaveThisFavorite && (
    <ShowAlertFavorite
      showAlert={showAlertUserHaveThisFavorite}
      setShow={()=>setShowAlertUserHaveThisFavorite(false)}
      text={"You Have This Favorite"}
      type={""}
      title={""}
      typeAlert={"warning"}
    />
  )}
      {/* {showAlertUserAddFavorite && (
        <Snackbar
          open={showAlertUserAddFavorite}
          autoHideDuration={3000}
          onClose={() => {
            setShowAlertUserAddFavorite(false);
          }}
        >
          <Alert
            variant="filled"
            severity="success"
            sx={{ width: "100%", fontSize: "17px", textAlign: "center" }}
          >
            favorite save {type}
            <br />
            {title}
          </Alert>
        </Snackbar>
      )}

      {showAlertUserNeedConnectToAddFavorite && (
        <Snackbar
          open={showAlertUserNeedConnectToAddFavorite}
          autoHideDuration={3000}
          onClose={() => {
            setShowAlertUserNeedConnectToAddFavorite(false);
          }}
        >
          <Alert
            variant="filled"
            severity="info"
            sx={{ width: "100%", fontSize: "17px", textAlign: "center" }}
          >
            Please SignIn Or Register <br />
            and you can Add This Favorite
          </Alert>
        </Snackbar>
      )}

      {showAlertUserHaveThisFavorite && (
        <Snackbar
          open={showAlertUserHaveThisFavorite}
          autoHideDuration={3000}
          onClose={() => {
            setShowAlertUserHaveThisFavorite(false);
          }}
        >
          <Alert
            variant="filled"
            severity="warning"
            sx={{ width: "100%", fontSize: "17px", textAlign: "center" }}
          >
            You Have This Favorite
            <br />
            Please Check in your Favorites
          </Alert>
        </Snackbar>
      )} */}
    </>
  );
};



export default UserSaveFavorite;
