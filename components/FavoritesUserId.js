import { useEffect, useState } from 'react'
import styles from "../styles/favoriteUser.module.css"
import styless from "../styles/infoCategoryPage.module.css"
import { Box, Tab, Table, TableBody, TableCell, TableRow, Tabs, Typography } from '@mui/material';
import { motion } from "framer-motion"
import { container, item } from "./StyleAnimation"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LinkIcon from '@mui/icons-material/Link';
import Image from 'next/image'
import UserDeleteFavorite from './UserDeleteFavorite';
import CircularProgress from '@mui/material/CircularProgress';
import { favoriteSaveIdUserFIle, favoriteSaveIdUserVideo, favoriteSaveIdUserLink } from "../api-helpers/frontend/utils"



function FavoritesUserId() {

  const [FileUserFile, setFileUserFile] = useState([]);
  const [FileUserVideo, setFileUserVideo] = useState([]);
  const [FileUserLink, setFileUserLink] = useState([]);

  const [dataUser, setDataUser] = useState({});

  const [tabIndex, setTabIndex] = useState(0);

  const [loadingVideo, setLoadingVideo] = useState(false);
  const [loadingLink, setLoadingLink] = useState(false);
  const [loadingFIle, setLoadingFIle] = useState(false);

  let countLinkInfoCategory = 1;
  let countLinkLinkFIleCategory = 1;


  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };



  useEffect(() => {

    let userData = JSON.parse(window.sessionStorage.getItem('user'))

    if (userData != null) {
      setDataUser(userData.connectUser);

      setLoadingFIle(true)
      favoriteSaveIdUserFIle(userData.connectUser._id)
        .then((data) => setFileUserFile(data))
        .then(() => setLoadingFIle(false))
        .catch((err) => console.log(err));

      setLoadingVideo(true)
      favoriteSaveIdUserVideo(userData.connectUser._id)
        .then((data) => setFileUserVideo(data))
        .then(() => setLoadingVideo(false))
        .catch((err) => console.log(err));

      setLoadingLink(true)
      favoriteSaveIdUserLink(userData.connectUser._id)
        .then((data) => setFileUserLink(data))
        .then(() => setLoadingLink(false))
        .catch((err) => console.log(err));
    }

    else {
      setDataUser()
    }

  }, [])




  return (

    <>
      <motion.div className={styles.titleFavorite}>
        <motion.h1 variants={item}>
          <span>Hi</span>
          <span>{dataUser.name}</span>
          <span>your</span>
          <span>Favorite</span>
          <span>
            <Image src='https://i.postimg.cc/rptM0xN9/favorite.png'
              alt="logo heater"
              width={40}
              height={45}
              priority />
          </span>
        </motion.h1>
      </motion.div>


      <div className={styles.showData}>
        <div className={styles.circleModels}>
          <div className={styles.cardsInfoAbout} >

            <div className={styles.box}>
              <div className={styles.img}>
                <div className={styles.inner}>
                  <div className={styles.skew}>
                    <img src="https://i.postimg.cc/wTC3v49v/documents.png" alt="icon" />
                  </div>
                </div>
              </div>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className={styles.text}>
                <h3>File's</h3>
                {(FileUserFile.length === 0) ?
                  <motion.p variants={item}>
                    <CircularProgress color="inherit" size={15} />
                  </motion.p>
                  : <motion.p variants={item}>{FileUserFile.length}</motion.p>}
              </motion.div>
            </div>


            <div className={styles.box}>
              <div className={styles.img}>
                <div className={styles.inner}>
                  <div className={styles.skew}>
                    <img src="https://i.postimg.cc/Tw1TQnTF/video-marketing.png" alt="icon" />
                  </div>
                </div>
              </div>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className={styles.text}>
                <h3>Video's</h3>
                {(FileUserVideo.length === 0) ?
                  <motion.p variants={item}>
                    <CircularProgress color="inherit" size={15} />
                  </motion.p>
                  : <motion.p variants={item}>{FileUserVideo.length}</motion.p>}
              </motion.div>
            </div>

            <div className={styles.box}>
              <div className={styles.img}>
                <div className={styles.inner}>
                  <div className={styles.skew}>
                    <img src="https://i.postimg.cc/g2pXstQ7/link.png" alt="icon" />
                  </div>
                </div>
              </div>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className={styles.text}>
                <h3>Link's</h3>
                {(FileUserLink.length === 0) ?
                  <motion.p variants={item}>
                    <CircularProgress color="inherit" size={15} />
                  </motion.p>
                  : <motion.p variants={item}>{FileUserLink.length}</motion.p>}
              </motion.div>
            </div>

          </div>
        </div>
      </div>


      <motion.div
        variants={container}
        initial="hidden"
        animate="show">
        <motion.div variants={item}>

          <Box>
            <Box>
              <Tabs
                className={styless.tabsStyleInfo}
                value={tabIndex}
                onChange={handleTabChange}
                variant="fullWidth"
                TabIndicatorProps={{ style: { background: '#4f5515' } }}
              >
                <Tab label={<div className={styless.tabStyle}> Video</div>} />
                <Tab label={<div className={styless.tabStyle}> Links</div>} />
                <Tab label={<div className={styless.tabStyle}> Files Download</div>} />
              </Tabs>
            </Box>
            <Box >


              {tabIndex === 0 && (
                <Box>
                  <div className={styles.line}>

                    {(loadingVideo) ?
                      <div style={{ color: "gray", display: "flex", justifyContent: "center" }}>
                        <CircularProgress color="inherit" size={30} />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br />
                      </div>
                      :
                      <div className={styles.StyleAllShowData}>
                        {(FileUserVideo.length !== 0) ?
                          <div className={styless.StyleAllShowData}>
                            {FileUserVideo.map(InfoCategory => (
                              <div className={styless.videoInfoCategory} key={InfoCategory._id}>

                                <p>{InfoCategory.title}
                                  <UserDeleteFavorite id={InfoCategory._id} />
                                </p>

                                <iframe allowFullScreen='allowFullScreen' src={InfoCategory.favorite} alt="video Learn" />
                              </div>
                            ))}
                          </div>
                          :
                          <div className={styless.noHaveFiles}>
                            Not Have Now FIles Sorry
                          </div>
                        }
                      </div>
                    }

                  </div>

                </Box>
              )}


              {tabIndex === 1 && (

                <Box>
                  {(loadingLink) ?
                    <div style={{ color: "gray", display: "flex", justifyContent: "center" }}>
                      <CircularProgress color="inherit" size={30} />
                      <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </div>
                    :
                    <div className={styless.line}>
                      <div className={styless.tableStyle}>
                        <Table style={{ width: 600 }} aria-label="simple table">
                          <TableBody>

                            {((FileUserLink.length !== 0) ?
                              <>
                                {FileUserLink.map((InfoCategory) => (
                                  <TableRow
                                    key={InfoCategory._id}
                                    style={{ borderBottom: "2px solid #b0c4cf" }}
                                  >

                                    <TableCell style={{ color: "white" }} align="center">
                                      <p className={styless.fileLinkAboutCategory}>
                                        {countLinkInfoCategory++}.
                                      </p>
                                    </TableCell>

                                    <TableCell style={{ color: "white" }} align="center">
                                      <p className={styless.fileLinkAboutCategory}>
                                        {InfoCategory.title}
                                      </p>
                                    </TableCell>


                                    <TableCell style={{ color: "white" }} align="center">
                                      <div className={styless.fileLinkAboutCategory}>
                                        <a target="_blank" href={InfoCategory.favorite} download>
                                          <LinkIcon />
                                        </a>
                                      </div>
                                    </TableCell>

                                    <TableCell style={{ color: "white" }} align="center">
                                      <Typography className={styless.fileLinkAboutCategory}>

                                        <UserDeleteFavorite id={InfoCategory._id} />

                                      </Typography>
                                    </TableCell>

                                  </TableRow>
                                ))}
                              </>
                              :
                              <div className={styless.noHaveFiles}>
                                Not Have Now FIles Sorry
                              </div>

                            )}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  }
                </Box>
              )}


              {tabIndex === 2 && (

                <Box>
                  {(loadingFIle) ?
                    <div style={{ color: "gray", display: "flex", justifyContent: "center" }}>
                      <CircularProgress color="inherit" size={30} />
                      <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </div>
                    :
                    <div className={styless.line}>
                      <div className={styless.tableStyle}>
                        <Table style={{ width: 600 }} aria-label="simple table">
                          <TableBody>

                            {((FileUserFile.length !== 0) ?
                              <>
                                {FileUserFile.map((InfoCategory) => (
                                  <TableRow
                                    key={InfoCategory._id}
                                    style={{ borderBottom: "2px solid #b0c4cf" }}
                                  >

                                    <TableCell style={{ color: "white" }} align="center">
                                      <p className={styless.fileLinkAboutCategory}>
                                        {countLinkLinkFIleCategory++}.
                                      </p>
                                    </TableCell>

                                    <TableCell style={{ color: "white" }} align="center">
                                      <p className={styless.fileLinkAboutCategory}>
                                        {InfoCategory.title}
                                      </p>
                                    </TableCell>


                                    <TableCell style={{ color: "white" }} align="center">
                                      <div className={styless.fileLinkAboutCategory}>
                                        <a target="_blank" href={InfoCategory.favorite} download>
                                          <FileDownloadIcon />
                                        </a>
                                      </div>
                                    </TableCell>

                                    <TableCell style={{ color: "white" }} align="center">
                                      <Typography className={styless.fileLinkAboutCategory}>

                                        <UserDeleteFavorite id={InfoCategory._id} />

                                      </Typography>
                                    </TableCell>

                                  </TableRow>
                                ))}
                              </>
                              :
                              <div className={styless.noHaveFiles}>
                                Not Have Now FIles Sorry
                              </div>

                            )}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  }
                </Box>
              )}


            </Box>
          </Box>

        </motion.div>
      </motion.div>

    </>
  )
}


export default FavoritesUserId