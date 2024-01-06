import { addUserFavorite, checkIfUserHaveThisFavorite } from '../../../../api-helpers/frontend/utils';


export const SaveFavorite = async (dataUser, dataInfoSave, setShowAlertUserAddFavorite, setShowAlertUserHaveThisFavorite, setShowAlertUserNeedConnectToAddFavorite) => {

    if (dataUser) {

        let idUser = dataUser._id;

        await checkIfUserHaveThisFavorite(idUser, idFavorite)
            .then(() => {

                let favoriteData = JSON.parse(window.sessionStorage.getItem("favorite"));

                if (favoriteData.length === 0) {

                    addUserFavorite(dataInfoSave.favorite, dataInfoSave.title, dataInfoSave.type, idUser, dataInfoSave.idFavorite)
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