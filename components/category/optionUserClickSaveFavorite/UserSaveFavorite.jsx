import { useState } from "react";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import styles from "../infoCategoryPage.module.css";
import { SaveFavorite } from "./function/SaveFavoride";
import ShowAlertFavorite from "./alerts/ShowAlertFavorite";
import { OpenCloseModelsPopUpAndAlert } from "../../../customHook/OpenCloseModelsPopUp";
import LoadingCircularProgressButton from "../../tools/loading/LoadingCircularProgressButton";



const UserSaveFavorite = ({ favorite, title, type, idFavorite }) => {


  // open close pop up alerts custom hook
  // Alert User Add Favorite
  const { showModel, handleShowModel, handleCloseModel } =
    OpenCloseModelsPopUpAndAlert();
  // User Need Connect ToAdd Favorite,
  const { showOneMoreModel, handleShowOneMoreModel, handleCloseOneMoreModel } =
    OpenCloseModelsPopUpAndAlert();
  // User Have This Favorite
  const { showTwoMoreModel, handleShowTwoMoreModel, handleCloseTwoMoreModel } =
    OpenCloseModelsPopUpAndAlert();

  
  const [dataInfoSave] = useState({
    favorite: favorite,
    title: title,
    type: type,
    idFavorite: idFavorite,
  });


  const [clickToSaveOrDeleteFavorite, setClickToSaveOrDeleteFavorite] =
    useState(false);

  
  return (
    <>
      <b className={styles.SaveBookMarkInfoUser}>
        {!clickToSaveOrDeleteFavorite ? (
          <BookmarkAddIcon
            onClick={() =>
              SaveFavorite(
                dataInfoSave,
                handleShowModel,
                handleShowTwoMoreModel,
                handleShowOneMoreModel,
                setClickToSaveOrDeleteFavorite
              )
            }
            className={styles.buttonSave}
          />
        ) : (
          <LoadingCircularProgressButton whereUse={"saveOrDeleteFavorite"} />
        )}
      </b>

      {showModel && (
        <ShowAlertFavorite
          showAlert={showModel}
          show={handleCloseModel}
          text={"favorite save"}
          type={dataInfoSave.type}
          title={dataInfoSave.title}
          typeAlert={"success"}
        />
      )}

      {showOneMoreModel && (
        <ShowAlertFavorite
          showAlert={showOneMoreModel}
          show={handleCloseOneMoreModel}
          text={"Please SignIn Or Register"}
          type={""}
          title={""}
          typeAlert={"warning"}
        />
      )}

      {showTwoMoreModel && (
        <ShowAlertFavorite
          showAlert={showTwoMoreModel}
          show={handleCloseTwoMoreModel}
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