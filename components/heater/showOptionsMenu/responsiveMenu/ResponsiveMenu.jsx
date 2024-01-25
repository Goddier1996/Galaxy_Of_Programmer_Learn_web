import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import styles from "../../menu.module.css";
import dataOptionsMenu from "../../jsonOptionsMenu/OptionsMenu.json";
import {
  hamburgerNavbarResponsiveScreen,
  hamburgerNavbarResponsiveScreenUserConnect,
} from "../../function/HeaterFunction";
import { useRouter } from "next/router";



const ResponsiveMenu = ({
  SaveDataUserFromSessionStorage,
  handleShowModelSignIn,
  handleShowModelRegister,
}) => {


  const [anchorElNav, setAnchorElNav] = useState(null);
  const history = useRouter();

    
  return (
    <>
      <Typography
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          textDecoration: "none",
        }}
      >
        <div className={styles.LogoHeater}>
          <Image
            src="https://i.postimg.cc/wBpsh76T/giphy.gif"
            alt="logo heater"
            blurDataURL="https://i.postimg.cc/wBpsh76T/giphy.gif"
            placeholder="blur"
            width={900}
            height={900}
          />
        </div>
      </Typography>

      {SaveDataUserFromSessionStorage == null ? (
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={(event) => setAnchorElNav(event.currentTarget)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={() => setAnchorElNav(null)}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <div className={styles.SelectCursor}>
              {dataOptionsMenu.mainPagesResponsiveScreen.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={() =>
                    hamburgerNavbarResponsiveScreen(
                      page.id,
                      history,
                      setAnchorElNav,
                      handleShowModelSignIn,
                      handleShowModelRegister
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
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={(event) => setAnchorElNav(event.currentTarget)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={() => setAnchorElNav(null)}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <div className={styles.SelectCursor}>
              {dataOptionsMenu.mainPagesResponsiveScreenUserConnect.map(
                (page) => (
                  <MenuItem
                    key={page.id}
                    onClick={() =>
                      hamburgerNavbarResponsiveScreenUserConnect(
                        page.id,
                        history,
                        setAnchorElNav
                      )
                    }
                  >
                    <Typography textAlign="center">{page.namePage}</Typography>
                  </MenuItem>
                )
              )}
            </div>
          </Menu>
        </Box>
      )}
    </>
  );
};


export default ResponsiveMenu;