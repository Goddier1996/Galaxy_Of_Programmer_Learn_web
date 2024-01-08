import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import styles from "../infoCategoryPage.module.css";
import ShowVideos from "./ShowVideos";
import { UseFetch } from "../../../customHook/customHook";


const ShowVideoCategoryLearn = ({ idCategoryVideo, howUse }) => {


  const [InfoCategoryVideoLearn, setInfoCategoryVideoLearn] = useState({});

  // custom hook fetch data
  const { data, loading, error } = UseFetch(InfoCategoryVideoLearn);


  useEffect(() => {

    let opjDataFetch = {};

    switch (howUse) {
      case "user":
        opjDataFetch = {
          typeHowUse: "user",
          id: idCategoryVideo,
          typeFile: "Video",
        };
        setInfoCategoryVideoLearn(opjDataFetch);
        break;

      case "info":
        opjDataFetch = {
          typeHowUse: "info",
          id: idCategoryVideo,
          typeFile: "Video",
        };
        setInfoCategoryVideoLearn(opjDataFetch);
        break;

      default:
        console.log("not have any data");
    }
    
  }, [idCategoryVideo,howUse]);



  return (
    <Box>
      <div className={styles.line}>
        {loading ? (
          <div className={styles.loading}>
            <CircularProgress color="inherit" size={30} />
          </div>
        ) : (
          <div className={styles.StyleAllShowData}>
            {data.length !== 0 ? (
              <>
                {data.map((InfoCategoryVideo) => (
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