import { signInUser } from "../../../api-helpers/frontend/utils";


export const connectUserToSite = async (user, setShowAlertUserEmptyInDatabase, setDisabledSignInButton, setShowAlertUserConnect) => {

    await signInUser(user);
    let userData = JSON.parse(window.sessionStorage.getItem("user"));

    if (userData.connectUser == null) {
        setShowAlertUserEmptyInDatabase();
        sessionStorage.removeItem("user");
    } else {
        setDisabledSignInButton(true);
        setShowAlertUserConnect();
    }
};



export const connectDemoUser = async (setDisabledSignInButton, setShowAlertUserConnect) => {

    let user = {
        login: process.env.DEMO_LOGIN,
        password: process.env.DEMO_PASSWORD,
    };

    await signInUser(user)
        .then((value) => console.log(value))
        .then(() => {
            setDisabledSignInButton(true);
            setShowAlertUserConnect();
        })
        .catch((err) => console.log(err));
};