import { addUser } from "../../../api-helpers/frontend/utils"


export const registerNewUser = async (inputs, checkIfHaveThisUserInDataBase, setCheckIfHaveThisUserInDataBase, clickNumButton, setShowAlertShowAlertHaveLoginInDatabase, setDisabledRegesterButton, setDisabledCloseButton, setShowAlertUserRegister) => {

    if (clickNumButton >= 2) {
        if (checkIfHaveThisUserInDataBase) {
            setShowAlertShowAlertHaveLoginInDatabase();
            setDisabledRegesterButton(false);
            setCheckIfHaveThisUserInDataBase("");
        }
        else {
            setDisabledRegesterButton(true);
            setDisabledCloseButton(true);
            addUser(inputs)
                .then((value) => console.log(value))
                .then(() => {
                    setShowAlertUserRegister();
                })
                .catch(err => console.log(err));
        }
    }
}