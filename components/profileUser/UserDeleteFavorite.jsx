import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import styles from "../category/infoCategoryPage.module.css"
import { favoriteRemoveIdUser } from "../../api-helpers/frontend/utils"
import SnackBarShow from '../tools/SnackBarShow';
import { OpenCloseModelsPopUpAndAlert } from "../../customHook/OpenCloseModelsPopUp";


const UserDeleteFavorite = ({ id }) => {


    // open model favorite user Remove , custom hook
    const { showModel, handleShowModel, handleCloseModel } = OpenCloseModelsPopUpAndAlert();

    const UserRemoveFavorite = () => {

        favoriteRemoveIdUser(id)
            .then(() => handleShowModel())
            .catch(err => console.log(err))
    }


    return (
        <>
            <b className={styles.SaveBookMarkInfoUser}>
                <BookmarkRemoveIcon className={styles.buttonSave} onClick={UserRemoveFavorite} />
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
    )
}

export default UserDeleteFavorite;