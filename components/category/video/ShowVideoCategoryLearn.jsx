import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import styles from "../infoCategoryPage.module.css";
import ShowVideos from "./ShowVideos";
import { UseFetch } from "../../../customHook/customHook";
import LoadingCircularProgress from "../../tools/loading/LoadingCircularProgress";


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
          <LoadingCircularProgress/>
        ) : (
          <div className={styles.StyleAllShowData}>
            {data.length !== 0 ? (
              <>
                {data.map((InfoCategoryVideo) => (
                  <ShowVideos key={InfoCategoryVideo._id} data={InfoCategoryVideo} use={howUse} />
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