import { registerCheckIfHaveThisUserInDataBase } from "../../../api-helpers/frontend/utils"
import { addUser } from '../../../api-helpers/frontend/utils';



export const registerNewUser = async (inputs, setShowAlertShowAlertHaveLoginInDatabase, setDisabledRegesterButton, setDisabledCloseButton, setShowAlertUserRegister) => {


    if (await registerCheckIfHaveThisUserInDataBase(inputs.login)) {
        setShowAlertShowAlertHaveLoginInDatabase(true);
        setDisabledRegesterButton(false);
        return;
    }

    else {
        setDisabledRegesterButton(true);
        setDisabledCloseButton(true);
        await addUser(inputs)
            .then((value) => console.log(value))
            .then(() => {
                setShowAlertUserRegister(true);
            })
            .catch(err => console.log(err));
    }

}