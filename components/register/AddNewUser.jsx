import { useState } from "react";
import styles from "./register.module.css";
import { Button } from "@mui/material";
import { registerCheckIfHaveThisUserInDataBase } from "../../api-helpers/frontend/utils";
import RobotBox from "../ReCAPTCHA/RobotBox";
import SnackBarShow from "../tools/SnackBarShow";
import { registerNewUser } from "./function/RegisterFunction";
import LoadingCircularProgressButton from "../tools/loading/LoadingCircularProgressButton";
import { OpenCloseModelsPopUpAndAlert } from "../../customHook/OpenCloseModelsPopUp";


const AddNewUser = ({ closeModel }) => {


  const [checkIfHaveThisUserInDataBase, setCheckIfHaveThisUserInDataBase] =
        useState("");
    
  const [clickNumButton, setClickNumButton] = useState(1);
  const [disabledRegesterButton, setDisabledRegesterButton] = useState(false);
  const [disabledCloseButton, setDisabledCloseButton] = useState(false);

  // open model pop up User Register , custom hook
  const { showModel, handleShowModel, handleCloseModel } = OpenCloseModelsPopUpAndAlert();
  // open model pop up User Register NeedInput Value , custom hook
  const { showOneMoreModel, handleShowOneMoreModel, handleCloseOneMoreModel } = OpenCloseModelsPopUpAndAlert();
  // open model pop up User Register Password NOT Equals , custom hook
  const { showTwoMoreModel, handleShowTwoMoreModel, handleCloseTwoMoreModel } = OpenCloseModelsPopUpAndAlert();
  // open model pop up Have this user In Database , custom hook
  const { showThereMoreModel, handleShowThereMoreModel, handleCloseThereMoreModel } = OpenCloseModelsPopUpAndAlert();


  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatarUser] = useState(
    "https://i.postimg.cc/90N7bp8f/imgbin-astronaut-avatar-png.png"
  );

  // check box if user not robot
  const [capVal, setCapVal] = useState(false);

    
  const onSubmitRegister = (e) => {

    e.preventDefault();

    if (login == "" || password == "" || name == "") {
      handleShowOneMoreModel();
      return;
    }
    else if (password != confirmPassword) {
      handleShowTwoMoreModel();
      return;
    }
    else {
      let inputs = {
        name: name,
        login: login,
        password: password,
        confirmPassword: confirmPassword,
        avatarUser: avatarUser,
      };

      registerCheckIfHaveThisUserInDataBase(inputs.login)
        .then((data) => setCheckIfHaveThisUserInDataBase(data))
        .then(setClickNumButton((clickNumButton) => clickNumButton + 1))
        .then(
          registerNewUser(
            inputs,
            checkIfHaveThisUserInDataBase,
            setCheckIfHaveThisUserInDataBase,
            clickNumButton,
            handleShowThereMoreModel,
            setDisabledRegesterButton,
            setDisabledCloseButton,
            handleShowModel
          )
        )
        .catch((err) => console.log(err));
    }
  };

    
  return (
    <div className={styles.animationOpenPopUp}>
      <div className={styles.modelRegister}>
        <div className={styles.form}>
          <div className={styles.header}>
            <Button
              disabled={disabledCloseButton}
              onClick={closeModel}
              variant="contained"
              sx={{
                bgcolor: "rgba(255, 0, 0, 0.600)",
                "&:hover": { bgcolor: "rgba(255, 0, 0, 0.500)" },
              }}
            >
              X
            </Button>

            <div className={styles.styleTitleRegister}>
              <h1>Register</h1>
            </div>

            <div className={styles.image}></div>
          </div>
          <div className="body-form">
            <form onSubmit={onSubmitRegister}>
              <div className="input-group mb-3">
                <div className={styles.input}>
                  <span className="input-group-text">
                    <i className="fa fa-grin"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Login"
                  onChange={(event) => setLogin(event.target.value)}
                  value={login}
                  name="login"
                />
              </div>

              <div className="input-group mb-3">
                <div className={styles.input}>
                  <span className="input-group-text">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                  name="name"
                />
              </div>

              <div className="input-group mb-3">
                <div className={styles.input}>
                  <span className="input-group-text">
                    <i className="fa fa-key"></i>
                  </span>
                </div>
                <input
                  type="tel"
                  maxLength="6"
                  className="form-control"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                  name="password"
                />
              </div>

              <div className="input-group mb-3">
                <div className={styles.input}>
                  <span className="input-group-text">
                    <i className="fa fa-key"></i>
                  </span>
                </div>
                <input
                  type="tel"
                  maxLength="6"
                  className="form-control"
                  placeholder="Confirm Password"
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  value={confirmPassword}
                  name="confirmPassword"
                />
              </div>

              {/* check box if user dont robot */}
              <div className={styles.checkBox}>
                    <RobotBox activeRobotBox={() => setCapVal(true)} />
              </div>

              <div className={styles.RegisterInOrCloseButtom}>
                <Button
                  type="submit"
                  disabled={!capVal ? !capVal : disabledRegesterButton}
                  variant="contained"
                >
                   {!disabledRegesterButton ?
                    <>Register<br/>
                    Click twice</>
                    :
                    <LoadingCircularProgressButton whereUse="register" />
                  }
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      
      {/* here alerts if error and more , show when user input value register */}
      {showModel && (
        <SnackBarShow
          showAlert={showModel}
          setShowAlert={() => handleCloseModel()}
          typeMessage={"You have successfully registered"}
          typeAlert={"success"}
          func={null}
        />
      )}

      {showOneMoreModel && (
        <SnackBarShow
          showAlert={showOneMoreModel}
          setShowAlert={() => handleCloseOneMoreModel()}
          typeMessage={"input all value or Incorrect input"}
          typeAlert={"warning"}
          func={null}
        />
      )}

      {showTwoMoreModel && (
        <SnackBarShow
          showAlert={showTwoMoreModel}
          setShowAlert={() => handleCloseTwoMoreModel()}
          typeMessage={"Password NOT Equals !"}
          typeAlert={"warning"}
          func={null}
        />
      )}

      {showThereMoreModel && (
        <SnackBarShow
          showAlert={showThereMoreModel}
          setShowAlert={() => handleCloseThereMoreModel()}
          typeMessage={
            "Have This Login in database! Wait Model Register closed, Try Again"
          }
          typeAlert={"warning"}
          func={closeModel}
        />
      )}
    </div>
  );
};


export default AddNewUser;