import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { getCategoryIdInfoVideoLearn } from "../../../api-helpers/frontend/utils";
import styles from "../infoCategoryPage.module.css";
import ShowVideos from "./ShowVideos";
import { favoriteSaveIdUserVideo } from "../../../api-helpers/frontend/utils";



const ShowVideoCategoryLearn = ({ idCategoryVideo, howUse }) => {


  const [InfoCategoryVideoLearn, setInfoCategoryVideoLearn] = useState([]);
  const [loadingVideo, setLoadingVideo] = useState(false);

    
    
  useEffect(() => {
    const controller = new AbortController();

    setLoadingVideo(true);

    // show if howUse = userProfile , we show in profile , or info show in page info category
    {
      howUse == "user"
        ? favoriteSaveIdUserVideo(idCategoryVideo, {
            signal: controller.signal,
          })
            .then((data) => setInfoCategoryVideoLearn(data))
            .then(() => setLoadingVideo(false))
            .catch((err) => console.log(err))
        : howUse == "info"
        ? getCategoryIdInfoVideoLearn(idCategoryVideo, {
            signal: controller.signal,
          })
            .then((dataCategory) => setInfoCategoryVideoLearn(dataCategory))
            .then(() => setLoadingVideo(false))
            .catch((err) => console.log(err))
        : "";
    }

    // switch (howUse) {
    //     case "userProfile":
    //         favoriteSaveIdUserVideo(idCategoryVideo, { signal: controller.signal })
    //         .then((data) => setInfoCategoryVideoLearn(data))
    //         .then(() => setLoadingVideo(false))
    //             .catch((err) => console.log(err))
    //         break;
    //         case "info":
    //             getCategoryIdInfoVideoLearn(idCategoryVideo, { signal: controller.signal })
    //                 .then((dataCategory) => setInfoCategoryVideoLearn(dataCategory))
    //                 .then(() => setLoadingVideo(false))
    //             .catch((err) => console.log(err))
    //         break;
    //     default:
    //         console.log("not have any data")
    // }

    return () => {
      controller.abort();
    };
  }, [idCategoryVideo]);

    
    
  return (
    <Box>
      <div className={styles.line}>
        {loadingVideo ? (
          <div
            style={{ color: "gray", display: "flex", justifyContent: "center" }}
          >
            <CircularProgress color="inherit" size={30} />
          </div>
        ) : (
          <div className={styles.StyleAllShowData}>
            {InfoCategoryVideoLearn.length !== 0 ? (
              <>
                {InfoCategoryVideoLearn.map((InfoCategoryVideo) => (
                  <ShowVideos data={InfoCategoryVideo} use={howUse} />
                ))}
              </>
            ) : (
              <div className={styles.noHaveFiles}>Not Have Now FIles Sorry</div>
            )}
          </div>
        )}
      </div>
    </Box>
  );
};


export default ShowVideoCategoryLearn;