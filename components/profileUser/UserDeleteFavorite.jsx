import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import styles from "../category/infoCategoryPage.module.css";
import { favoriteRemoveIdUser } from "../../api-helpers/frontend/utils";
import SnackBarShow from "../tools/SnackBarShow";
import { OpenCloseModelsPopUpAndAlert } from "../../customHook/OpenCloseModelsPopUp";
import LoadingCircularProgressButton from "../tools/loading/LoadingCircularProgressButton";
import { useState } from "react";



const UserDeleteFavorite = ({ id }) => {


  // open model favorite user Remove , custom hook
  const { showModel, handleShowModel, handleCloseModel } =
    OpenCloseModelsPopUpAndAlert();


  const [clickToSaveOrDeleteFavorite, setClickToSaveOrDeleteFavorite] =
    useState(false);


  const UserRemoveFavorite = () => {
    setClickToSaveOrDeleteFavorite(true);
    favoriteRemoveIdUser(id)
      .then(() => handleShowModel())
      .then(() => setClickToSaveOrDeleteFavorite(false))
      .catch((err) => console.log(err));
  };

    
  return (
    <>
      <b className={styles.SaveBookMarkInfoUser}>
        {!clickToSaveOrDeleteFavorite ? (
          <BookmarkRemoveIcon
            className={styles.buttonSave}
            onClick={UserRemoveFavorite}
          />
        ) : (
          <LoadingCircularProgressButton whereUse={"saveOrDeleteFavorite"} />
        )}
      </b>

      {showModel && (
        <SnackBarShow
          showAlert={showModel}
          setShowAlert={() => handleCloseModel()}
          typeMessage={"Successfully Delete"}
          typeAlert={"success"}
          func={null}
        />
      )}
    </>
  );
};


export default UserDeleteFavorite;