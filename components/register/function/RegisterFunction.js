import { registerCheckIfHaveThisUserInDataBase } from "../../../api-helpers/frontend/utils"
import { addUser } from '../../../api-helpers/frontend/utils';



export const registerNewUser = async (inputs, setShowAlertShowAlertHaveLoginInDatabase, setDisabledRegesterButton, setDisabledCloseButton, setShowAlertUserRegister) => {




    if (registerCheckIfHaveThisUserInDataBase(inputs.login)===inputs.login) {
        alert("have");
    }
    
    else {
        alert("no have");
    }
}