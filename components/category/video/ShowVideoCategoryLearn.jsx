import { Box } from "@mui/material";
import styles from "../infoCategoryPage.module.css";
import ShowVideos from "./ShowVideos";
import { UseFetch } from "../../../customHook/customHook";
import LoadingCircularProgress from "../../tools/loading/LoadingCircularProgress";


const ShowVideoCategoryLearn = ({ idCategoryVideo, howUse }) => {


  // custom hook fetch data
  const { data, loading } = UseFetch(howUse, idCategoryVideo, "Video");


  return (
    <Box>
      <div className={styles.line}>
        {loading ? (
          <LoadingCircularProgress/>
        ) : (
          <div className={styles.StyleAllShowData}>
            {data.length ? (
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