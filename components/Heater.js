import { useState, useEffect } from 'react'
import { AppBar, Box, Toolbar, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import { Modal } from 'react-bootstrap'
import Image from 'next/image'
import { motion } from "framer-motion"
import { container, item } from "./StyleAnimation"
import styles from "../styles/menu.module.css"
import dynamic from 'next/dynamic'

const SignIn = dynamic(() => import('./SignIn'), {
  ssr: false,
})

const Register = dynamic(() => import('../pages/Register'), {
  ssr: false,
})

const ProfileUser = dynamic(() => import('./ProfileUser'), {
  ssr: false,
})



const Header = () => {


  // values menu
  const mainPages = [{ id: '1', namePage: 'Home' }, { id: '2', namePage: 'About' }];

  const mainPagesResponsiveScreen = [{ id: '1', namePage: 'Home' }, { id: '2', namePage: 'About' }, { id: '3', namePage: 'Login' }, { id: '4', namePage: 'Register' }];
  const mainPagesResponsiveScreenUserConnect = [{ id: '1', namePage: 'Home' }, { id: '2', namePage: 'About' }];

  const controlPages = [{ id: '1', namePage: 'Login' }, { id: '2', namePage: 'Register' }];
  const ProfileUserOptions = [{ id: '1', option: 'Profile' }, { id: '2', option: 'favorites' }, { id: '3', option: 'Logout' }];


  const router = useRouter();

  const [SaveDataUserFromSessionStorage, setSaveDataUserFromSessionStorage] = useState({});


  const handleShowModelRegister = () => setShowModelRegister(true);
  const [showModelRegister, setShowModelRegister] = useState(false);

  const handleShowModelSignIn = () => setShowModelSignIn(true);
  const [showModelSignIn, setShowModelSignIn] = useState(false);

  const handleShowModelProfileUser = () => setShowModelProfileUser(true);
  const [showModelProfileUser, setShowModelProfileUser] = useState(false);


  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);



  // open close menu responsive Mobile
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }





  // open close avatar user profile
  const handleOpenUserProfileMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserProfileMenu = () => {
    setAnchorElUser(null);
  };




  const mainPagesChoose = (indexPage) => {

    if (indexPage == 1) {
      router.push("/")
    }

    if (indexPage == 2) {
      router.push("/About")
    }
  };



  const mainPagesChooseLoginRegister = (indexPage) => {

    if (indexPage == 1) {
      handleShowModelSignIn();
    }

    if (indexPage == 2) {
      handleShowModelRegister();
    }
  };



  const hamburgerNavbarResponsiveScreen = (indexPage) => {

    if (indexPage == 1) {
      router.push("/")
      handleCloseNavMenu()
    }

    if (indexPage == 2) {
      router.push("/About")
      handleCloseNavMenu()
    }

    if (indexPage == 3) {
      handleShowModelSignIn();
      handleCloseNavMenu()
    }

    if (indexPage == 4) {
      handleShowModelRegister();
      handleCloseNavMenu()
    }

  };


  const hamburgerNavbarResponsiveScreenUserConnect = (indexPage) => {

    if (indexPage == 1) {
      router.push("/")
      handleCloseNavMenu()
    }

    if (indexPage == 2) {
      router.push("/About")
      handleCloseNavMenu()
    }
  };




  const mainPagesChooseResponsiveScreenUserConnect = (indexPage) => {

    if (indexPage == 1) {
      handleShowModelProfileUser();
      handleCloseUserProfileMenu();
    }

    if (indexPage == 2) {
      router.push("/FavoritesUsers");
      handleCloseUserProfileMenu();
    }

    if (indexPage == 3) {
      logOutUser();
      handleCloseUserProfileMenu();
    }

  };




  const logOutUser = async () => {
    await sessionStorage.removeItem("user");
    await router.push("/")
    window.location.reload(false);
  }




  const hideModelRegister = () => {

    setShowModelRegister(false);
  }

  const hideModelSignIn = () => {

    setShowModelSignIn(false);
  }

  const hideModelProfileUser = () => {

    setShowModelProfileUser(false);
  }



  useEffect(() => {

    let userData = JSON.parse(window.sessionStorage.getItem("user"));

    if (userData != null) {
      setSaveDataUserFromSessionStorage(userData.connectUser);
    }

    else {
      setSaveDataUserFromSessionStorage()
    }

  }, []);




  return (

    <>
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>

          <AppBar position="static" style={{ background: 'none' }} >

            <Container variants={item} maxWidth="xl" >
              <Toolbar disableGutters>

                <Typography
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    textDecoration: 'none',
                  }}
                >
                  <div className={styles.LogoHeater}>
                    <Image
                      src='https://i.postimg.cc/wBpsh76T/giphy.gif'
                      alt="logo heater"
                      width={900}
                      height={900}
                      priority
                    />
                  </div>
                </Typography>


                {(SaveDataUserFromSessionStorage == null) ?

                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: 'block', md: 'none' },
                      }}
                    >

                      {mainPagesResponsiveScreen.map((page) => (
                        <MenuItem key={page.id} onClick={() => hamburgerNavbarResponsiveScreen(page.id)}>
                          <Typography textAlign="center">{page.namePage}</Typography>
                        </MenuItem>
                      ))}

                    </Menu>
                  </Box>

                  :

                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: 'block', md: 'none' },
                      }}
                    >

                      {mainPagesResponsiveScreenUserConnect.map((page) => (
                        <MenuItem key={page.id} onClick={() => hamburgerNavbarResponsiveScreenUserConnect(page.id)}>
                          <Typography textAlign="center">{page.namePage}</Typography>
                        </MenuItem>
                      ))}

                    </Menu>
                  </Box>
                }

                <Typography
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    textDecoration: 'none',
                  }}
                >
                  <div className={styles.LogoHeater}>
                    <Image
                      src='https://i.postimg.cc/wBpsh76T/giphy.gif'
                      alt="logo heater"
                      width={900}
                      height={900}
                      priority
                    />
                  </div>
                </Typography>


                {/* menu value pc screen */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {mainPages.map((page) => (
                    <Button
                      key={page.id}
                      onClick={() => mainPagesChoose(page.id)}
                      sx={{ my: 2, color: 'white', display: 'block', fontWeight: "600", fontSize: "16px" }}
                    >
                      {page.namePage}
                    </Button>
                  ))}
                </Box>




                {(SaveDataUserFromSessionStorage) ?
                  < Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserProfileMenu} sx={{ p: 0 }}>
                        <Avatar alt="avatar user" src={SaveDataUserFromSessionStorage.avatarUser} style={{ height: "60px", width: "60px", marginTop: "5px" }} />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserProfileMenu}
                    >
                      {ProfileUserOptions.map((setting) => (
                        <MenuItem key={setting.id} onClick={() => mainPagesChooseResponsiveScreenUserConnect(setting.id)}>
                          <Typography textAlign="center">{setting.option}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                  :
                  <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                    {controlPages.map((page) => (
                      <Button
                        key={page.id}
                        onClick={() => mainPagesChooseLoginRegister(page.id)}
                        sx={{ my: 2, color: 'white', display: 'block', fontWeight: "600", fontSize: "16px" }}
                      >
                        {page.namePage}
                      </Button>))}
                  </Box>
                }


              </Toolbar>
            </Container>
          </AppBar >

        </motion.div>
      </motion.div>



      {/* model popup show Register */}
      <Modal show={showModelRegister}  >
        <Register hideRegisterFun={hideModelRegister} />
      </Modal>


      {/* model popup show Sign in */}
      <Modal show={showModelSignIn} >
        <SignIn hideSignInFun={hideModelSignIn} />
      </Modal>

      {/* model popup show Sign in */}
      <Modal show={showModelProfileUser} >
        <ProfileUser hideSignInFun={hideModelProfileUser} />
      </Modal>
    </>
  );
}


export default Header;



