import styles from "../../category/infoCategoryPage.module.css";
import { CircularProgress } from "@mui/material";


const LoadingCircularProgress = () => {
  return (
    <div className={styles.loading}>
      <CircularProgress color="inherit" size={30} />
    </div>
  );
};


export default LoadingCircularProgress;
