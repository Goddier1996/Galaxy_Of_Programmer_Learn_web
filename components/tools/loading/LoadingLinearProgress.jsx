import { LinearProgress, Grid } from "@mui/material";
import styles from "./loading.module.css";


const LoadingLinearProgress = () => {
  return (
    <div className={styles.loadingStylePages}>
      <Grid style={{ width: "50%" }} container>
        <Grid xs item>
          <LinearProgress color="success" />
        </Grid>
      </Grid>
    </div>
  );
};

export default LoadingLinearProgress;
