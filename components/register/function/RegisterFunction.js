import { registerCheckIfHaveThisUserInDataBase } from "../../../api-helpers/frontend/utils"
import { addUser } from '../../../api-helpers/frontend/utils';



export const registerNewUser = async (inputs, setShowAlertShowAlertHaveLoginInDatabase, setDisabledRegesterButton, setDisabledCloseButton, setShowAlertUserRegister) => {


    registerCheckIfHaveThisUserInDataBase(inputs.login)
        .then((dataCategory) => { dataCategory ? alert("have") : alert("not have") }
        )
        .catch((err) => console.log(err));



}