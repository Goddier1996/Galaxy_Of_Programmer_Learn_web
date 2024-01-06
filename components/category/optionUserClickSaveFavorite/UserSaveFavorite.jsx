// import { useEffect, useState } from 'react'
// import { Snackbar, Alert } from '@mui/material';
// import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
// import styles from "../infoCategoryPage.module.css"
// import { addUserFavorite, checkIfUserHaveThisFavorite } from '../../../api-helpers/frontend/utils';



// const UserSaveFavorite = ({ favorite, title, type, idFavorite }) => {


//     const [showAlertUserAddFavorite, setShowAlertUserAddFavorite] = useState(false);
//     const [showAlertUserNeedConnectToAddFavorite, setShowAlertUserNeedConnectToAddFavorite] = useState(false);
//     const [showAlertUserHaveThisFavorite, setShowAlertUserHaveThisFavorite] = useState(false);


//     const [dataUser, setDataUser] = useState({});


//     const SaveFavorite = async () => {

//         if (dataUser) {

//             let idUser = dataUser._id;

//             await checkIfUserHaveThisFavorite(idUser, idFavorite)
//                 .then(() => {

//                     let favoriteData = JSON.parse(window.sessionStorage.getItem("favorite"));

//                     if (favoriteData.length === 0) {

//                         addUserFavorite(favorite, title, type, idUser, idFavorite)
//                             .then(() => { setShowAlertUserAddFavorite(true) })
//                             .then(() => { sessionStorage.removeItem("favorite") })
//                             .catch(err => console.log(err));
//                     }

//                     else {
//                         setShowAlertUserHaveThisFavorite(true)
//                         sessionStorage.removeItem("favorite");
//                     }
//                 })
//                 .catch((err) => console.log(err));
//         }

//         else {
//             setShowAlertUserNeedConnectToAddFavorite(true)
//         }
//     }



//     useEffect(() => {

//         let userData = JSON.parse(window.sessionStorage.getItem('user'))

//         if (userData != null) {
//             setDataUser(userData.connectUser);
//         }

//         else {
//             setDataUser()
//         }

//     }, [])



//     return (
//         <>
//             <b className={styles.SaveBookMarkInfoUser}>
//                 <BookmarkAddIcon onClick={SaveFavorite} className={styles.buttonSave} />
//             </b>


//             {showAlertUserAddFavorite && (
//                 <Snackbar
//                     open={showAlertUserAddFavorite}
//                     autoHideDuration={3000}
//                     onClose={() => {
//                         setShowAlertUserAddFavorite(false)
//                     }}>


//                     <Alert
//                         variant="filled" severity="success"
//                         sx={{ width: '100%', fontSize: "17px", textAlign: "center" }}>
//                         favorite save {type}<br />
//                         {title}
//                     </Alert>

//                 </Snackbar>
//             )}


//             {showAlertUserNeedConnectToAddFavorite && (
//                 <Snackbar
//                     open={showAlertUserNeedConnectToAddFavorite}
//                     autoHideDuration={3000}
//                     onClose={() => {
//                         setShowAlertUserNeedConnectToAddFavorite(false)
//                     }}>


//                     <Alert
//                         variant="filled" severity="info"
//                         sx={{ width: '100%', fontSize: "17px", textAlign: "center" }}>
//                         Please SignIn Or Register <br />
//                         and you can Add This Favorite
//                     </Alert>

//                 </Snackbar>
//             )}


//             {showAlertUserHaveThisFavorite && (
//                 <Snackbar
//                     open={showAlertUserHaveThisFavorite}
//                     autoHideDuration={3000}
//                     onClose={() => {
//                         setShowAlertUserHaveThisFavorite(false)
//                     }}>


//                     <Alert
//                         variant="filled" severity="warning"
//                         sx={{ width: '100%', fontSize: "17px", textAlign: "center" }}>
//                         You Have This Favorite<br />
//                         Please Check in your Favorites
//                     </Alert>

//                 </Snackbar>
//             )}
//         </>
//     )
// }



// export default UserSaveFavorite











import { useEffect, useState } from 'react'
import { Snackbar, Alert } from '@mui/material';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import styles from "../infoCategoryPage.module.css"
import { addUserFavorite, checkIfUserHaveThisFavorite } from '../../../api-helpers/frontend/utils';
import {SaveFavorite}from "./function/SaveFavoride"


const UserSaveFavorite = ({ favorite, title, type, idFavorite }) => {


    const [showAlertUserAddFavorite, setShowAlertUserAddFavorite] = useState(false);
    const [showAlertUserNeedConnectToAddFavorite, setShowAlertUserNeedConnectToAddFavorite] = useState(false);
    const [showAlertUserHaveThisFavorite, setShowAlertUserHaveThisFavorite] = useState(false);


    const [dataInfoSave] = useState({
        favorite: favorite,
        title: title,
        type: type,
        idFavorite:idFavorite
    });





    return (
        <>
            <b className={styles.SaveBookMarkInfoUser}>
                <BookmarkAddIcon
                    onClick={
                        ()=>SaveFavorite(dataInfoSave, setShowAlertUserAddFavorite, setShowAlertUserHaveThisFavorite, setShowAlertUserNeedConnectToAddFavorite)
                } className={styles.buttonSave} />
            </b>


            {showAlertUserAddFavorite && (
                <Snackbar
                    open={showAlertUserAddFavorite}
                    autoHideDuration={3000}
                    onClose={() => {
                        setShowAlertUserAddFavorite(false)
                    }}>


                    <Alert
                        variant="filled" severity="success"
                        sx={{ width: '100%', fontSize: "17px", textAlign: "center" }}>
                        favorite save {type}<br />
                        {title}
                    </Alert>

                </Snackbar>
            )}


            {showAlertUserNeedConnectToAddFavorite && (
                <Snackbar
                    open={showAlertUserNeedConnectToAddFavorite}
                    autoHideDuration={3000}
                    onClose={() => {
                        setShowAlertUserNeedConnectToAddFavorite(false)
                    }}>


                    <Alert
                        variant="filled" severity="info"
                        sx={{ width: '100%', fontSize: "17px", textAlign: "center" }}>
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
                        setShowAlertUserHaveThisFavorite(false)
                    }}>


                    <Alert
                        variant="filled" severity="warning"
                        sx={{ width: '100%', fontSize: "17px", textAlign: "center" }}>
                        You Have This Favorite<br />
                        Please Check in your Favorites
                    </Alert>

                </Snackbar>
            )}
        </>
    )
}

// {showAlertUserAddFavorite && (
//     <ShowAlertFavorite
//       showAlert={showAlertUserAddFavorite}
//       setShow={() => setShowAlertUserAddFavorite}
//       text={null}
//       type={type}
//     />
//   )}

//   {showAlertUserNeedConnectToAddFavorite && (
//     <ShowAlertFavorite
//       showAlert={showAlertUserNeedConnectToAddFavorite}
//       setShow={() => setShowAlertUserNeedConnectToAddFavorite}
//       text={"Please SignIn Or Register"}
//       type={null}
//     />
//   )}

//   {showAlertUserHaveThisFavorite && (
//     <ShowAlertFavorite
//       showAlert={showAlertUserHaveThisFavorite}
//       setShow={() => setShowAlertUserHaveThisFavorite}
//       text={"You Have This Favorite"}
//       type={null}
//     />
//   )}

export default UserSaveFavorite