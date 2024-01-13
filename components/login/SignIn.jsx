import { useState } from "react";
import styles from "./SignIn.module.css";
import {
  connectUserToSite,
  connectDemoUser,
} from "./function/ConnectFunctions";
import { Button } from "@mui/material";
import SnackBarShow from "../tools/SnackBarShow";
import LoadingCircularProgressButton from "../tools/loading/LoadingCircularProgressButton";
import { OpenCloseModelsPopUpAndAlert } from "../../customHook/OpenCloseModelsPopUp";


const SignIn = ({ hideSignInFun }) => {


  // pop up alerts show Custom Hook
  // Alert Empty Value Login
  const { showModel, handleShowModel, handleCloseModel } = OpenCloseModelsPopUpAndAlert();
  // Alert User Empty In Database
  const { showOneMoreModel, handleShowOneMoreModel, handleCloseOneMoreModel } = OpenCloseModelsPopUpAndAlert();
  // Alert User Connect
  const { showTwoMoreModel, handleShowTwoMoreModel, handleCloseTwoMoreModel } = OpenCloseModelsPopUpAndAlert();

  
  const [disabledSignInButton, setDisabledSignInButton] = useState(false);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

    
  const onSubmitSignIn = (e) => {
    
    e.preventDefault();

    if (login === "" || password === "") {
      // alert input value
      handleShowModel();
      return;
    }
      
    else if (login && password) {
      let userData = {
        login: login,
        password: password,
      };

      connectUserToSite(
        userData,
        // Alert User Empty In Database
        handleShowOneMoreModel,
        setDisabledSignInButton,
        // Alert User Connect
        handleShowTwoMoreModel
      );
    }
  };

    
  return (
    <div className={styles.animationOpenPopUp}>
      <div className={styles.modelRegister}>
        <div className={styles.form}>
          <div className={styles.header}>
            <Button
              disabled={disabledSignInButton}
              onClick={hideSignInFun}
              variant="contained"
              sx={{
                bgcolor: "rgba(255, 0, 0, 0.600)",
                "&:hover": { bgcolor: "rgba(255, 0, 0, 0.500)" },
              }}
            >
              X
            </Button>

            <div className={styles.styleTitleRegister}>
              <h1>Sign In</h1>
            </div>

            <div className={styles.image}></div>
          </div>

                  
          <div className="body-form">
            <form onSubmit={onSubmitSignIn}>
              <div className="input-group mb-3 ">
                <div className={styles.input}>
                  <span className="input-group-text">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Login"
                  onChange={(event) => setLogin(event.target.value)}
                  value={login}
                  name="login"
                  disabled={disabledSignInButton}
                />
              </div>

              <div className="input-group mb-3">
                <div className={styles.input}>
                  <span className="input-group-text">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                  name="password"
                  disabled={disabledSignInButton}
                />
              </div>

              <br />

              <div className={styles.RegisterInOrCloseButtom}>
                <Button
                  disabled={disabledSignInButton}
                  type="submit"
                  variant="contained"
                >
                  {!disabledSignInButton ?
                    "Sign In"
                    :
                    <LoadingCircularProgressButton whereUse="signIn" />
                  }
                </Button>
              </div>

              <div className={styles.DemoUser}>
                <p
                  style={
                    disabledSignInButton === true
                      ? { color: "rgba(0, 0, 0, 0.1)", cursor: "none" }
                      : { color: "#ffffff" }
                  }
                  onClick={() => connectDemoUser(setDisabledSignInButton,handleShowTwoMoreModel)}
                >
                  Click to Connect Demo User
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

          
      {/* show alert when user connect */}
      {showModel && (
        <SnackBarShow
          showAlert={showModel}
          setShowAlert={() => handleCloseModel()}
          typeMessage={"input all value (Incorrect input) !"}
          typeAlert={"warning"}
          func={null}
        />
      )}

      {showOneMoreModel && (
        <SnackBarShow
          showAlert={showOneMoreModel}
          setShowAlert={() => handleCloseOneMoreModel()}
          typeMessage={"Don't Have This User In Database !"}
          typeAlert={"warning"}
          func={null}
        />
      )}

      {showTwoMoreModel && (
        <SnackBarShow
          showAlert={showTwoMoreModel}
          setShowAlert={() => handleCloseTwoMoreModel()}
          typeMessage={"Welcome you Connect, Let's Learn new technology"}
          typeAlert={"success"}
          func={null}
        />
      )}
    </div>
  );
};


export default SignIn;