import { addUserFavorite, checkIfUserHaveThisFavorite } from '../../../../api-helpers/frontend/utils';


export const SaveFavorite = async (dataInfoSave, ShowAlertUserAddFavorite, ShowAlertUserHaveThisFavorite, ShowAlertUserNeedConnectToAddFavorite) => {

    let userData = JSON.parse(window.sessionStorage.getItem('user'))

    if (userData) {

        let resultIfHaveThisFavorite = await checkIfUserHaveThisFavorite(userData.connectUser._id, dataInfoSave.idFavorite)

        if (resultIfHaveThisFavorite.length === 0) {
            addUserFavorite(dataInfoSave.favorite, dataInfoSave.title, dataInfoSave.type, userData.connectUser._id, dataInfoSave.idFavorite)
                .then(() => { ShowAlertUserAddFavorite()})
                .catch(err => console.log(err));
        }
        else {
            ShowAlertUserHaveThisFavorite();
        }
    }
    else {
        ShowAlertUserNeedConnectToAddFavorite();
    }
}