import { useState } from "react";
import styles from "./css/favoriteUser.module.css";
import styless from "../category/infoCategoryPage.module.css";
import { Box, Tab, Tabs } from "@mui/material";
import { motion } from "framer-motion";
import { container, item } from "../StyleAnimation";
import Image from "next/image";
import dynamic from "next/dynamic";
const ShowLinkCategoryLearn = dynamic(() =>
  import("../category/links/ShowLinkCategoryLearn"));
  const ShowFilleCategoryLearn = dynamic(() =>
    import("../category/files/ShowFilleCategoryLearn"));
    const ShowVideoCategoryLearn = dynamic(() =>
      import("../category/video/ShowVideoCategoryLearn"));
      const ShowCount = dynamic(() =>
  import("./showCountItemsFavorite/ShowCount"));


  
function FavoritesUserId({ data }) {


  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };


  return (
    <>
      <motion.div className={styles.titleFavorite}>
        <motion.h1 variants={item}>
          <span>Hi</span>
          <span>{data.name}</span>
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
              idUser={data._id}
            />
            <ShowCount
              img={"https://i.postimg.cc/Tw1TQnTF/video-marketing.png"}
              typeCount={"Video'sIdUser"}
              nameType={"Video's"}
              idUser={data._id}

            />
            <ShowCount
              img={"https://i.postimg.cc/g2pXstQ7/link.png"}
              typeCount={"Link'sIdUser"}
              nameType={"Link's"}
              idUser={data._id}
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
                  idCategoryVideo={data._id}
                  howUse={"user"}
                />
              )}
              {tabIndex === 1 && (
                <ShowLinkCategoryLearn
                  idCategoryLink={data._id}
                  howUse={"user"}
                />
              )}
              {tabIndex === 2 && (
                <ShowFilleCategoryLearn
                  idCategoryFille={data._id}
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