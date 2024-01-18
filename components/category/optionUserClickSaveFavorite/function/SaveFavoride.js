import { addUserFavorite, checkIfUserHaveThisFavorite } from '../../../../api-helpers/frontend/utils';


export const SaveFavorite = async (dataInfoSave, ShowAlertUserAddFavorite, ShowAlertUserHaveThisFavorite, ShowAlertUserNeedConnectToAddFavorite, setClickToSaveOrDeleteFavorite) => {

    let userData = JSON.parse(window.sessionStorage.getItem('user'))
    setClickToSaveOrDeleteFavorite(true);

    if (userData) {

        let resultIfHaveThisFavorite = await checkIfUserHaveThisFavorite(userData.connectUser._id, dataInfoSave.idFavorite)

        if (resultIfHaveThisFavorite.length === 0) {
            addUserFavorite(dataInfoSave.favorite, dataInfoSave.title, dataInfoSave.type, userData.connectUser._id, dataInfoSave.idFavorite)
                .then(() => { ShowAlertUserAddFavorite() })
                .then(() => setClickToSaveOrDeleteFavorite(false))
                .catch(err => console.log(err));
        }
        else {
            ShowAlertUserHaveThisFavorite();
            setClickToSaveOrDeleteFavorite(false)
        }
    }
    else {
        ShowAlertUserNeedConnectToAddFavorite();
        setClickToSaveOrDeleteFavorite(false)
    }
}