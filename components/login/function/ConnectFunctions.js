import { signInUser } from "../../../api-helpers/frontend/utils";


export const connectUserToSite = async (user, setShowAlertUserEmptyInDatabase, setDisabledSignInButton, setShowAlertUserConnect) => {

    await signInUser(user)
        .then(() => {
            let userData = JSON.parse(window.sessionStorage.getItem("user"));

            if (userData.connectUser == null) {
                setShowAlertUserEmptyInDatabase(true);
                sessionStorage.clear();
            } else {
                setDisabledSignInButton(true);
                setShowAlertUserConnect(true);
            }
        })
        .catch((err) => console.log(err));
};



export const connectDemoUser = async (setDisabledSignInButton,setShowAlertUserConnect) => {

    let user = {
        login: process.env.DEMO_LOGIN,
        password: process.env.DEMO_PASSWORD,
    };

    await signInUser(user)
        .then((value) => console.log(value))
        .then(() => {
            setDisabledSignInButton(true);
            setShowAlertUserConnect(true);
        })
        .catch((err) => console.log(err));
};