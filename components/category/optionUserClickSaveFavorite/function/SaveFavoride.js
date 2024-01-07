import { addUserFavorite, checkIfUserHaveThisFavorite } from '../../../../api-helpers/frontend/utils';


export const SaveFavorite = async (dataInfoSave, setShowAlertUserAddFavorite, setShowAlertUserHaveThisFavorite, setShowAlertUserNeedConnectToAddFavorite) => {

    let userData = JSON.parse(window.sessionStorage.getItem('user'))

    if (userData) {

        let resultIfHaveThisFavorite = await checkIfUserHaveThisFavorite(userData.connectUser._id, dataInfoSave.idFavorite)

        if (resultIfHaveThisFavorite.length === 0) {
            setShowAlertUserAddFavorite(true)
            addUserFavorite(dataInfoSave.favorite, dataInfoSave.title, dataInfoSave.type, userData.connectUser._id, dataInfoSave.idFavorite)
                .then(() => { setShowAlertUserAddFavorite(true) })
                .catch(err => console.log(err));
        }
        else {
            setShowAlertUserHaveThisFavorite(true)
        }
    }
    else {
        setShowAlertUserNeedConnectToAddFavorite(true)
    }
}