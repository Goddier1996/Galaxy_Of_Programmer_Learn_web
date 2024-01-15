import { CircularProgress, LinearProgress, Grid } from "@mui/material";
import styles from "./loading.module.css";

const LoadingCircularProgressButton = ({ whereUse }) => {

  return (
    <div>
      {whereUse == "count" ? (
        <CircularProgress color="inherit" size={15} />
      ) : whereUse == "signIn" || whereUse == "register" ? (
        <CircularProgress color="success" />
      ) : whereUse == "loadingCategories" ? (
        <div className={styles.loadingAllCategories}>
          <Grid style={{ width: "100%" }} container>
            <Grid xs item>
              <LinearProgress color="success" />
            </Grid>
          </Grid>
          <p>Loading Categories...</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};


export default LoadingCircularProgressButton;