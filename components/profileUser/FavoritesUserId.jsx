import {  useEffect, useState } from "react";
import styles from "./css/favoriteUser.module.css";
import styless from "../category/infoCategoryPage.module.css";
import { Box, Tab, Tabs } from "@mui/material";
import { motion } from "framer-motion";
import { container, item } from "../StyleAnimation";
import Image from "next/image";
import ShowCount from "./showCountItemsFavorite/ShowCount";
import ShowLinkCategoryLearn from "../category/links/ShowLinkCategoryLearn";
import ShowFilleCategoryLearn from "../category/files/ShowFilleCategoryLearn";
import ShowVideoCategoryLearn from "../category/video/ShowVideoCategoryLearn";


function FavoritesUserId() {


  const [dataUser, setDataUser] = useState({});
  const [tabIndex, setTabIndex] = useState(0);


  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };


  useEffect(() => {

    let userData = JSON.parse(window.sessionStorage.getItem('user'))

    if (userData != null) {
      setDataUser(userData.connectUser);
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
            <Image
              src="https://i.postimg.cc/rptM0xN9/favorite.png"
              alt="logo heater"
              width={40}
              height={45}
              priority
            />
          </span>
        </motion.h1>
      </motion.div>

      <div className={styles.showData}>
        <div className={styles.circleModels}>
          <div className={styles.cardsInfoAbout}>
            <ShowCount
              img={"https://i.postimg.cc/wTC3v49v/documents.png"}
              typeCount={"File'sIdUser"}
              nameType={"File's"}
            />
            <ShowCount
              img={"https://i.postimg.cc/Tw1TQnTF/video-marketing.png"}
              typeCount={"Video'sIdUser"}
              nameType={"Video's"}
            />
            <ShowCount
              img={"https://i.postimg.cc/g2pXstQ7/link.png"}
              typeCount={"Link'sIdUser"}
              nameType={"Link's"}
            />
          </div>
        </div>
      </div>

      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>
          <Box>
            <Box>
              <Tabs
                className={styless.tabsStyleInfo}
                value={tabIndex}
                onChange={handleTabChange}
                variant="fullWidth"
                TabIndicatorProps={{ style: { background: "#4f5515" } }}
              >
                <Tab label={<div className={styless.tabStyle}> Video</div>} />
                <Tab label={<div className={styless.tabStyle}> Links</div>} />
                <Tab label={<div className={styless.tabStyle}> Files Download</div>}/>
              </Tabs>
            </Box>
            <Box>
              {tabIndex === 0 && (
                <ShowVideoCategoryLearn
                  idCategoryVideo={dataUser._id}
                  howUse={"user"}
                />
              )}
              {tabIndex === 1 && (
                <ShowLinkCategoryLearn
                  idCategoryLink={dataUser._id}
                  howUse={"user"}
                />
              )}
              {tabIndex === 2 && (
                <ShowFilleCategoryLearn
                  idCategoryFille={dataUser._id}
                  howUse={"user"}
                />
              )}
            </Box>
          </Box>
        </motion.div>
      </motion.div>
    </>
  );
}


export default FavoritesUserId;