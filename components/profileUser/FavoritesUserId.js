import { useEffect, useState } from 'react'
import styles from "../../styles/favoriteUser.module.css"
import styless from "../../styles/infoCategoryPage.module.css"
import { Box, Tab, Tabs } from '@mui/material';
import { motion } from "framer-motion"
import { container, item } from "../StyleAnimation"
import Image from 'next/image'
import { favoriteSaveIdUserFIle, favoriteSaveIdUserVideo, favoriteSaveIdUserLink } from "../../api-helpers/frontend/utils"
import ShowCount from './ShowCount';
import ShowLinkCategoryLearn from '../category/links/ShowLinkCategoryLearn';
import ShowFilleCategoryLearn from '../category/Files/ShowFilleCategoryLearn';
import ShowVideoCategoryLearn from '../category/video/ShowVideoCategoryLearn';



function FavoritesUserId() {

  const [FileUserFile, setFileUserFile] = useState([]);
  const [FileUserVideo, setFileUserVideo] = useState([]);
  const [FileUserLink, setFileUserLink] = useState([]);

  const [dataUser, setDataUser] = useState({});

  const [tabIndex, setTabIndex] = useState(0);


  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };


  useEffect(() => {

    let userData = JSON.parse(window.sessionStorage.getItem('user'))

    if (userData != null) {

      setDataUser(userData.connectUser);

      favoriteSaveIdUserFIle(userData.connectUser._id)
        .then((data) => setFileUserFile(data))
        .then(() => setLoadingFIle(false))
        .catch((err) => console.log(err));

      favoriteSaveIdUserVideo(userData.connectUser._id)
        .then((data) => setFileUserVideo(data))
        .then(() => setLoadingVideo(false))
        .catch((err) => console.log(err));

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
            <ShowCount img={"https://i.postimg.cc/wTC3v49v/documents.png"} count={FileUserFile} typeCount={"File's"} />
            <ShowCount img={"https://i.postimg.cc/Tw1TQnTF/video-marketing.png"} count={FileUserVideo} typeCount={"Video's"} />
            <ShowCount img={"https://i.postimg.cc/g2pXstQ7/link.png"} count={FileUserLink} typeCount={"Link's"} />
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
                <ShowVideoCategoryLearn idCategoryVideo={dataUser._id} howUse={"user"} />
              )}


              {tabIndex === 1 && (
                <ShowLinkCategoryLearn idCategoryLink={dataUser._id} howUse={"user"} />
              )}


              {tabIndex === 2 && (
                <ShowFilleCategoryLearn idCategoryFille={dataUser._id} howUse={"user"} />
              )}

            </Box>
          </Box>
        </motion.div>
      </motion.div>

    </>
  )
}


export default FavoritesUserId