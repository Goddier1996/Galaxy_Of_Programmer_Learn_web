import React, { useState } from 'react'
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import styles from "../category/infoCategoryPage.module.css"
import { favoriteRemoveIdUser } from "../../api-helpers/frontend/utils"
import SnackBarShow from '../tools/SnackBarShow';



const UserDeleteFavorite = ({ id }) => {

    const [openAlert, setOpenAlert] = useState(false);


    const UserRemoveFavorite = () => {

        favoriteRemoveIdUser(id)
            .then(() => setOpenAlert(true))
            .catch(err => console.log(err))
    }


    return (
        <>
            <b className={styles.SaveBookMarkInfoUser}>
                <BookmarkRemoveIcon className={styles.buttonSave} onClick={UserRemoveFavorite} />
            </b>

            {openAlert && (
                <SnackBarShow
                    showAlert={openAlert}
                    setShowAlert={() => setOpenAlert(false)}
                    typeMessage={"Successfully Delete"}
                    typeAlert={"success"}
                    func={null}
                />
            )}
        </>
    )
}

export default UserDeleteFavorite;