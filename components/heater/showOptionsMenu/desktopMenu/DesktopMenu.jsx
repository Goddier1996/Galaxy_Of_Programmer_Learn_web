import { useState } from "react";
import {
  Box,
  Typography,
  Menu,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import dataOptionsMenu from "../../jsonOptionsMenu/OptionsMenu.json";
import {
  mainPagesChoose,
  mainPagesChooseLoginRegister,
  mainPagesChooseResponsiveScreenUserConnect,
} from "../../function/HeaterFunction";
import { useRouter } from "next/router";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import styles from "../../menu.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";



const DesktopMenu = ({
  SaveDataUserFromSessionStorage,
  handleShowModelRegister,
  handleShowModelSignIn,
  handleShowModelProfileUser
}) => {


  const mobileScreen = useMediaQuery("(min-width:991px)", { noSsr: true });

  const [anchorElUser, setAnchorElUser] = useState(null);
  const history = useRouter();

    
  return (
    <>
      <Typography
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          textDecoration: "none",
        }}
      >
        <div className={styles.LogoHeater}>
          <Image
            src="https://i.postimg.cc/wBpsh76T/giphy.gif"
            alt="logo heater"
            width={900}
            height={900}
            priority
          />
        </div>
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {dataOptionsMenu.mainPages.map((page) => (
          <Button
            key={page.id}
            onClick={() => mainPagesChoose(page.id, history)}
            sx={{
              my: 2,
              color: "white",
              display: "block",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            {page.namePage}
          </Button>
        ))}
      </Box>

      {SaveDataUserFromSessionStorage ? (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Menu User">
            <IconButton
              onClick={(event) => setAnchorElUser(event.currentTarget)}
              sx={{ p: 0 }}
            >
              <Avatar
                alt="avatar user"
                src={SaveDataUserFromSessionStorage.avatarUser}
                style={
                  mobileScreen
                    ? {
                        height: "60px",
                        width: "60px",
                        marginTop: "5px",
                        marginRight: "50px",
                      }
                    : {
                        height: "60px",
                        width: "60px",
                        marginTop: "5px",
                      }
                }
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElUser)}
            onClose={() => setAnchorElUser(null)}
          >
            <div className={styles.SelectCursor}>
              {dataOptionsMenu.ProfileUserOptions.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={() =>
                    mainPagesChooseResponsiveScreenUserConnect(
                      page.id,
                      history,
                      handleShowModelProfileUser,
                      setAnchorElUser
                    )
                  }
                >
                  <Typography textAlign="center">{page.namePage}</Typography>
                </MenuItem>
              ))}
            </div>
          </Menu>
        </Box>
      ) : (
        <Box
          sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}
          style={{ margin: "20px" }}
        >
          {dataOptionsMenu.controlPages.map((page) => (
            <Button
              key={page.id}
              onClick={() =>
                mainPagesChooseLoginRegister(
                  page.id,
                  handleShowModelSignIn,
                  handleShowModelRegister
                )
              }
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              {page.namePage}
            </Button>
          ))}
        </Box>
      )}
    </>
  );
};


export default DesktopMenu;