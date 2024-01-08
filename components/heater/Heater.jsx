import { useState, useEffect } from "react";
import { AppBar, Box, Toolbar, Container, Modal } from "@mui/material";
import { motion } from "framer-motion";
import { container, item } from "../StyleAnimation";
import dynamic from "next/dynamic";
import SelectCurser from "../tools/selectTypeCurser/SelectCurser";
import { applyCursorUserChoose } from "./function/HeaterFunction";
import ResponsiveMenu from "./showOptionsMenu/responsiveMenu/ResponsiveMenu";
import DesktopMenu from "./showOptionsMenu/desktopMenu/DesktopMenu";

const SignIn = dynamic(() => import("../login/SignIn"));
const Register = dynamic(() => import("../../pages/Register"));
const ProfileUser = dynamic(() => import("../profileUser/ProfileUser"));



const Header = () => {


  const [SaveDataUserFromSessionStorage, setSaveDataUserFromSessionStorage] =
    useState({});

  const handleShowModelRegister = () => setShowModelRegister(true);
  const [showModelRegister, setShowModelRegister] = useState(false);

  const handleShowModelSignIn = () => setShowModelSignIn(true);
  const [showModelSignIn, setShowModelSignIn] = useState(false);

  const handleShowModelProfileUser = () => setShowModelProfileUser(true);
  const [showModelProfileUser, setShowModelProfileUser] = useState(false);

  const [selectCurserHeater, setSelectCurserHeater] = useState(null);
  const [Curser, setCurser] = useState({});
  
  const ChangeStyleCurserInHeater = [
    {
      id: 1,
      typeStyleCurser: !Curser?"https://i.postimg.cc/3RhrRvpp/cursor-png-1137.png":Curser,
    }
  ];


  useEffect(() => {

    let userData = JSON.parse(window.sessionStorage.getItem("user"));
    let typeCursor = sessionStorage.getItem("typeCursor");

    if (userData != null) {
      setSaveDataUserFromSessionStorage(userData.connectUser);
    }
    if (userData == null) {
      setSaveDataUserFromSessionStorage();
    }
    if (Curser != null) {
      setCurser(typeCursor);
    }

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
                  handleShowModelSignIn={handleShowModelSignIn}
                  handleShowModelRegister={handleShowModelRegister}
                />

                {/* DESKTOP screen */}
                <DesktopMenu
                  SaveDataUserFromSessionStorage={
                    SaveDataUserFromSessionStorage
                  }
                  handleShowModelRegister={handleShowModelRegister}
                  handleShowModelSignIn={handleShowModelSignIn}
                  handleShowModelProfileUser={handleShowModelProfileUser}
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
      <Modal open={showModelRegister}>
        <>
          <Register hideRegisterFun={() => setShowModelRegister(false)} />
        </>
      </Modal>

      {/* model popup show Sign in */}
      <Modal open={showModelSignIn}>
        <>
          <SignIn hideSignInFun={() => setShowModelSignIn(false)} />
        </>
      </Modal>

      {/* model popup show Sign in */}
      <Modal open={showModelProfileUser}>
        <>
          <ProfileUser hideSignInFun={() => setShowModelProfileUser(false)} />
        </>
      </Modal>
    </>
  );
};


export default Header;