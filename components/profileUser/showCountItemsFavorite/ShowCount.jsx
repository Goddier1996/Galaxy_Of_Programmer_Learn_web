import styles from "../css/favoriteUser.module.css";
import { motion } from "framer-motion";
import { container, item } from "../../StyleAnimation";
import { CountFetch } from "../../../customHook/customHookFetchCount";
import LoadingCircularProgressButton from "../../tools/loading/LoadingCircularProgressButton";


const ShowCount = ({ img, typeCount,nameType,idUser }) => {


  const { data, loading } = CountFetch(typeCount, idUser);

  return (
    <div className={styles.box}>
      <div className={styles.img}>
        <div className={styles.inner}>
          <div className={styles.skew}>
            <img src={img} alt="icon" />
          </div>
        </div>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={styles.text}
      >
        <h3>{nameType}</h3>
        {loading ? (
          <motion.p variants={item}>
            <LoadingCircularProgressButton whereUse="count" />
          </motion.p>
        ) : (
          <motion.p variants={item}>{data.length}</motion.p>
        )}
      </motion.div>
    </div>
  );
};


export default ShowCount;