import { useState, useEffect } from "react";
import { AppBar, Box, Toolbar, Container, Modal } from "@mui/material";
import { motion } from "framer-motion";
import { container, item } from "../StyleAnimation";
import dynamic from "next/dynamic";
import SelectCurser from "../tools/selectTypeCurser/SelectCurser";
import { applyCursorUserChoose } from "./function/HeaterFunction";
import ResponsiveMenu from "./showOptionsMenu/responsiveMenu/ResponsiveMenu";
import DesktopMenu from "./showOptionsMenu/desktopMenu/DesktopMenu";
import { OpenCloseModelsPopUpAndAlert } from "../../customHook/OpenCloseModelsPopUp";
const SignIn = dynamic(() => import("../login/SignIn"));
const Register = dynamic(() => import("../../pages/Register"));
const ProfileUser = dynamic(() => import("../profileUser/ProfileUser"));



const Header = () => {


  // open close pop up Custom Hook
  // Show Model Register
  const { showModel, handleShowModel, handleCloseModel } = OpenCloseModelsPopUpAndAlert();
    // Show Model SignIn
  const { showOneMoreModel, handleShowOneMoreModel, handleCloseOneMoreModel } = OpenCloseModelsPopUpAndAlert();
    // Show Model Profile User
  const { showTwoMoreModel, handleShowTwoMoreModel, handleCloseTwoMoreModel } = OpenCloseModelsPopUpAndAlert();

  
  const [SaveDataUserFromSessionStorage, setSaveDataUserFromSessionStorage] =
    useState({});
  const [selectCurserHeater, setSelectCurserHeater] = useState(null);
  const [Curser, setCurser] = useState("");


  const ChangeStyleCurserInHeater = [
    {
      id: 1,
      typeStyleCurser:
        Curser == null
          ? "https://i.postimg.cc/3RhrRvpp/cursor-png-1137.png"
          : Curser,
    },
  ];


  useEffect(() => {

    let userData = JSON.parse(window.sessionStorage.getItem("user"));

    if (userData != null) {
      setSaveDataUserFromSessionStorage(userData.connectUser);
    } else {
      setSaveDataUserFromSessionStorage();
    }
  }, []);


  useEffect(() => {

    let typeCursor = sessionStorage.getItem("typeCursor");
    setCurser(typeCursor);
  }, [ChangeStyleCurserInHeater]);



  return (
    <>
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>
          <AppBar position="static" style={{ background: "none" }}>
            <Container variants={item} maxWidth="xl">
              <Toolbar disableGutters>
                {/* RESPONSIVE screen mobile */}
                <ResponsiveMenu
                  SaveDataUserFromSessionStorage={
                    SaveDataUserFromSessionStorage
                  }
                  handleShowModelSignIn={handleShowOneMoreModel}
                  handleShowModelRegister={handleShowModel}
                />

                {/* DESKTOP screen */}
                <DesktopMenu
                  SaveDataUserFromSessionStorage={
                    SaveDataUserFromSessionStorage
                  }
                  handleShowModelRegister={handleShowModel}
                  handleShowModelSignIn={handleShowOneMoreModel}
                  handleShowModelProfileUser={handleShowTwoMoreModel}
                />

                {/* show SELECT Curser style */}
                <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                  <SelectCurser
                    handleOpenSelectCurserHeater={(event) =>
                      setSelectCurserHeater(event.currentTarget)
                    }
                    ChangeStyleCurserInHeater={ChangeStyleCurserInHeater}
                    applyCursorUserChoose={applyCursorUserChoose}
                    setSelectCurserHeater={setSelectCurserHeater}
                    selectCurserHeater={selectCurserHeater}
                    handleCloseSelectCurserHeater={() =>
                      setSelectCurserHeater(null)
                    }
                  />
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </motion.div>
      </motion.div>

      {/* model popup show Register */}
      <Modal open={showModel}>
        <>
          <Register hideRegisterFun={() => handleCloseModel()} />
        </>
      </Modal>

      {/* model popup show Sign in */}
      <Modal open={showOneMoreModel}>
        <>
          <SignIn hideSignInFun={() => handleCloseOneMoreModel()} />
        </>
      </Modal>

      {/* model popup show Sign in */}
      <Modal open={showTwoMoreModel}>
        <>
          <ProfileUser hideSignInFun={() => handleCloseTwoMoreModel()} />
        </>
      </Modal>
    </>
  );
};


export default Header;