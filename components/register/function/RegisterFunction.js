import { registerCheckIfHaveThisUserInDataBase } from "../../../api-helpers/frontend/utils"
import { addUser } from '../../../api-helpers/frontend/utils';



export const registerNewUser = async (inputs, setShowAlertShowAlertHaveLoginInDatabase, setDisabledRegesterButton, setDisabledCloseButton, setShowAlertUserRegister) => {

    alert(inputs.login)
    // let check = await registerCheckIfHaveThisUserInDataBase(inputs.login);

    // if (check) {
    //     // setShowAlertShowAlertHaveLoginInDatabase(true);
    //     // setDisabledRegesterButton(false);
    //     // return;
    //     alert("have")

    // }

    // else {
    //     alert("not have")
    //     // setDisabledRegesterButton(true);
    //     // setDisabledCloseButton(true);
    //     // await addUser(inputs)
    //     //     .then((value) => console.log(value))
    //     //     .then(() => {
    //     //         setShowAlertUserRegister(true);
    //     //     })
    //     //     .catch(err => console.log(err));
    // }

}