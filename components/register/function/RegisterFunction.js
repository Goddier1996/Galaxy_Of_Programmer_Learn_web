import { registerCheckIfHaveThisUserInDataBase } from "../../../api-helpers/frontend/utils"
import { addUser } from '../../../api-helpers/frontend/utils';



export const registerNewUser = async (inputs, setShowAlertShowAlertHaveLoginInDatabase, setDisabledRegesterButton, setDisabledCloseButton, setShowAlertUserRegister) => {




    if (registerCheckIfHaveThisUserInDataBase(inputs.login)) {
        alert("have");
    }
    
    if (!registerCheckIfHaveThisUserInDataBase(inputs.login)) {
        alert("no have");
    }
}