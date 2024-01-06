import { useEffect, useState } from 'react'
import { Snackbar, Alert } from '@mui/material';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import styles from "../infoCategoryPage.module.css"
import { addUserFavorite, checkIfUserHaveThisFavorite } from '../../../api-helpers/frontend/utils';



const UserSaveFavorite = ({ favorite, title, type, idFavorite }) => {


    const [showAlertUserAddFavorite, setShowAlertUserAddFavorite] = useState(false);
    const [showAlertUserNeedConnectToAddFavorite, setShowAlertUserNeedConnectToAddFavorite] = useState(false);
    const [showAlertUserHaveThisFavorite, setShowAlertUserHaveThisFavorite] = useState(false);


    const [dataUser, setDataUser] = useState({});


    const SaveFavorite = async () => {

        if (dataUser) {

            let idUser = dataUser._id;

            await checkIfUserHaveThisFavorite(idUser, idFavorite)
                .then(() => {

                    let favoriteData = JSON.parse(window.sessionStorage.getItem("favorite"));

                    if (favoriteData.length === 0) {

                        addUserFavorite(favorite, title, type, idUser, idFavorite)
                            .then(() => { setShowAlertUserAddFavorite(true) })
                            .then(() => { sessionStorage.removeItem("favorite") })
                            .catch(err => console.log(err));
                    }

                    else {
                        setShowAlertUserHaveThisFavorite(true)
                        sessionStorage.removeItem("favorite");
                    }
                })
                .catch((err) => console.log(err));
        }

        else {
            setShowAlertUserNeedConnectToAddFavorite(true)
        }
    }



    useEffect(() => {

        let userData = JSON.parse(window.sessionStorage.getItem('user'))

        if (userData != null) {
            setDataUser(userData.connectUser);
        }

        else {
            setDataUser()
        }

    }, [])



    return (
        <>
            <b className={styles.SaveBookMarkInfoUser}>
                <BookmarkAddIcon onClick={SaveFavorite} className={styles.buttonSave} />
            </b>


            {showAlertUserAddFavorite && (
        <ShowAlertFavorite
          showAlert={showAlertUserAddFavorite}
          setShow={() => setShowAlertUserAddFavorite}
          text={null}
          type={type}
        />
      )}

      {showAlertUserNeedConnectToAddFavorite && (
        <ShowAlertFavorite
          showAlert={showAlertUserNeedConnectToAddFavorite}
          setShow={() => setShowAlertUserNeedConnectToAddFavorite}
          text={"Please SignIn Or Register"}
          type={null}
        />
      )}

      {showAlertUserHaveThisFavorite && (
        <ShowAlertFavorite
          showAlert={showAlertUserHaveThisFavorite}
          setShow={() => setShowAlertUserHaveThisFavorite}
          text={"You Have This Favorite"}
          type={null}
        />
      )}


            
        </>
    )
}



export default UserSaveFavorite