import React, { useState } from 'react'
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import styles from "../styles/infoCategoryPage.module.css"
import { favoriteRemoveIdUser } from "../api-helpers/frontend/utils"
import { Snackbar, Alert } from '@mui/material';



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
                <Snackbar
                    open={openAlert}
                    autoHideDuration={1000}
                    onClose={() => {
                        setOpenAlert(false)
                        window.location.reload(false);
                    }}>

                    <Alert
                        onClose={() => setOpen(false)}
                        severity="success"
                        sx={{ width: '100%' }}>
                        Successfully Delete
                    </Alert>

                </Snackbar>
            )}
        </>
    )
}

export default UserDeleteFavorite