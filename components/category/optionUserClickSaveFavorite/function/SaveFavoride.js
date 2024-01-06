import { addUserFavorite, checkIfUserHaveThisFavorite } from '../../../../api-helpers/frontend/utils';


export const SaveFavorite = async (dataInfoSave, setShowAlertUserAddFavorite, setShowAlertUserHaveThisFavorite, setShowAlertUserNeedConnectToAddFavorite) => {

    let userData = JSON.parse(window.sessionStorage.getItem('user'))

    if (userData) {

        await checkIfUserHaveThisFavorite(userData._id, dataInfoSave.idFavorite)
            .then(() => {

                let favoriteData = JSON.parse(window.sessionStorage.getItem("favorite"));

                if (favoriteData.length === 0) {
                    setShowAlertUserAddFavorite(true)
                    // addUserFavorite(dataInfoSave.favorite, dataInfoSave.title, dataInfoSave.type, userData._id, dataInfoSave.idFavorite)
                    //     .then(() => { setShowAlertUserAddFavorite(true) })
                    //     .then(() => { sessionStorage.removeItem("favorite") })
                    //     .catch(err => console.log(err));
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