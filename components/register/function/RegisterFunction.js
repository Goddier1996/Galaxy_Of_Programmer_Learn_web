import { registerCheckIfHaveThisUserInDataBase } from "../../../api-helpers/frontend/utils"
import { addUser } from '../../../api-helpers/frontend/utils';



export const registerNewUser = async (inputs, setShowAlertShowAlertHaveLoginInDatabase, setDisabledRegesterButton, setDisabledCloseButton, setShowAlertUserRegister) => {

    const loginUser = inputs.login;

    registerCheckIfHaveThisUserInDataBase(loginUser)
        .then((dataCategory) => { dataCategory ? loginUser="" : !dataCategory?alert("no have"):null }
        )
        .catch((err) => console.log(err));



}