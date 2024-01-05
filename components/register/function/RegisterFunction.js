import { registerCheckIfHaveThisUserInDataBase } from "../../../api-helpers/frontend/utils"
import { addUser } from '../../../api-helpers/frontend/utils';



export const registerNewUser = async (inputs, setShowAlertShowAlertHaveLoginInDatabase, setDisabledRegesterButton, setDisabledCloseButton, setShowAlertUserRegister) => {

    let loginUser = inputs.login;

    registerCheckIfHaveThisUserInDataBase(loginUser)
        .then((dataCategory) => { dataCategory ? alert("have") : alert("not have") }
        )
        .catch((err) => console.log(err));



}