import { useState, useEffect } from 'react'
import { AppBar, Box, Toolbar, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, Modal } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { motion } from "framer-motion"
import { container, item } from "./StyleAnimation"
import styles from "../styles/menu.module.css"
import dynamic from 'next/dynamic'
import useMediaQuery from '@mui/material/useMediaQuery';

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

  const mobileScreen = useMediaQuery('(min-width:991px)', { noSsr: true });

  let typeCursor = sessionStorage.getItem("typeCursor");

  // values menu
  const mainPages = [{ id: '1', namePage: 'Home' }, { id: '2', namePage: 'About' }];

  const mainPagesResponsiveScreen = [{ id: '1', namePage: 'Home' }, { id: '2', namePage: 'About' }, { id: '3', namePage: 'Login' }, { id: '4', namePage: 'Register' }];
  const mainPagesResponsiveScreenUserConnect = [{ id: '1', namePage: 'Home' }, { id: '2', namePage: 'About' }];

  const controlPages = [{ id: '1', namePage: 'Login' }, { id: '2', namePage: 'Register' }];
  const ProfileUserOptions = [{ id: '1', option: 'Profile' }, { id: '2', option: 'favorites' }, { id: '3', option: 'Logout' }];

  const ChangeStyleCurserInHeater = [{ id: 1, typeStyleCurser: (typeCursor == null) ? "https://i.postimg.cc/3RhrRvpp/cursor-png-1137.png" : typeCursor }]

  const arrayCursors =
    [
      { id: 1, LinkImage: 'https://cur.cursors-4u.net/others/oth-8/oth756.cur' },
      { id: 2, LinkImage: 'https://cur.cursors-4u.net/mechanics/mec-4/mec318.cur' },
      { id: 3, LinkImage: 'https://cur.cursors-4u.net/mechanics/mec-4/mec329.cur' },
      { id: 4, LinkImage: 'https://cur.cursors-4u.net/mechanics/mec-4/mec324.cur' },
      { id: 5, LinkImage: 'https://cur.cursors-4u.net/mechanics/mec-4/mec326.cur' }
    ];


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

  const [selectCurserHeater, setSelectCurserHeater] = useState(null);



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


  const handleOpenSelectCurserHeater = (event) => {
    setSelectCurserHeater(event.currentTarget);
  };

  const handleCloseSelectCurserHeater = () => {
    setSelectCurserHeater(null);
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



  const applyCursorUserChoose = (urlImage) => {

    document.body.style.cursor = `url(${urlImage}), pointer`;
    sessionStorage.setItem("typeCursor", urlImage);
    handleCloseSelectCurserHeater();
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

                {/* responsive screen mobile */}
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
                      <div className={styles.SelectCursor} >
                        {mainPagesResponsiveScreen.map((page) => (
                          <MenuItem key={page.id} onClick={() => hamburgerNavbarResponsiveScreen(page.id)}>
                            <Typography textAlign="center">{page.namePage}</Typography>
                          </MenuItem>
                        ))}
                      </div>

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

                      <div className={styles.SelectCursor} >
                        {mainPagesResponsiveScreenUserConnect.map((page) => (
                          <MenuItem key={page.id} onClick={() => hamburgerNavbarResponsiveScreenUserConnect(page.id)}>
                            <Typography textAlign="center">{page.namePage}</Typography>
                          </MenuItem>
                        ))}
                      </div>

                    </Menu>
                  </Box>
                }



                {/* menu value desktop screen */}
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
                    <Tooltip title="Menu User">
                      <IconButton onClick={handleOpenUserProfileMenu} sx={{ p: 0 }}>
                        <Avatar alt="avatar user" src={SaveDataUserFromSessionStorage.avatarUser}
                          style={mobileScreen ? { height: "60px", width: "60px", marginTop: "5px", marginRight: "50px" } :
                            { height: "60px", width: "60px", marginTop: "5px" }} />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserProfileMenu}
                    >
                      <div className={styles.SelectCursor} >
                        {ProfileUserOptions.map((setting) => (
                          <MenuItem key={setting.id} onClick={() => mainPagesChooseResponsiveScreenUserConnect(setting.id)}>
                            <Typography textAlign="center">{setting.option}</Typography>
                          </MenuItem>
                        ))}
                      </div>
                    </Menu>
                  </Box>
                  :
                  <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} style={{ margin: "20px" }}>
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


                {/* show Select Curser style */}
                <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>

                  <Tooltip title="Select Curser" >
                    <IconButton onClick={handleOpenSelectCurserHeater} sx={{ p: 0 }}>

                      {ChangeStyleCurserInHeater.map((page) => (

                        <Avatar className={styles.SelectCurserStyleHeater}
                          alt="Select Curser"
                          src={page.typeStyleCurser}
                          style={{ height: "60px", width: "60px" }} />
                      ))}
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={selectCurserHeater}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'left'
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left'
                    }}
                    open={Boolean(selectCurserHeater)}
                    onClose={handleCloseSelectCurserHeater}
                  >

                    <div className={styles.SelectCursor} >

                      <h1>Select Cursor</h1>

                      {arrayCursors.map((item) =>
                        <motion.div variants={item} className={styles.cursorsImage} key={item.id}>
                          <img src={item.LinkImage} onClick={() => applyCursorUserChoose(item.LinkImage)} />
                        </motion.div>
                      )}
                    </div>

                  </Menu>
                </Box>

              </Toolbar>
            </Container>
          </AppBar >

        </motion.div>
      </motion.div>



      {/* model popup show Register */}
      <Modal open={showModelRegister}  >
        <div>
          <Register hideRegisterFun={hideModelRegister} />
        </div>
      </Modal>


      {/* model popup show Sign in */}
      <Modal open={showModelSignIn} >
        <div>
          <SignIn hideSignInFun={hideModelSignIn} />
        </div>
      </Modal>

      
      {/* model popup show Sign in */}
      <Modal open={showModelProfileUser} >
        <div>
          <ProfileUser hideSignInFun={hideModelProfileUser} />
        </div>
      </Modal>
    </>
  );
}


export default Header;