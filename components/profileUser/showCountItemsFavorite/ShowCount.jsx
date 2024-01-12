import styles from "../css/favoriteUser.module.css";
import { motion } from "framer-motion";
import { container, item } from "../../StyleAnimation";
import { useEffect, useState } from "react";
import { CountFetch } from "../../../customHook/customHookFetchCount";
import LoadingCircularProgressButton from "../../tools/loading/LoadingCircularProgressButton";


const ShowCount = ({ img, typeCount,nameType }) => {


  const [countInfo, setCountInfo] = useState({});
  const { data, loading, error } = CountFetch(countInfo);

    
    
  useEffect(() => {
    
    let opjDataFetch = {};
    let userData = JSON.parse(window.sessionStorage.getItem("user"));

    switch (typeCount) {
      case "Link'sIdUser":
        opjDataFetch = {
          typeFile: "Link'sIdUser",
          idUser: userData.connectUser._id,
        };
        setCountInfo(opjDataFetch);
        break;

      case "File'sIdUser":
        opjDataFetch = {
          typeFile: "File'sIdUser",
          idUser: userData.connectUser._id,
        };
        setCountInfo(opjDataFetch);
        break;

      case "Video'sIdUser":
        opjDataFetch = {
          typeFile: "Video'sIdUser",
          idUser: userData.connectUser._id,
        };
        setCountInfo(opjDataFetch);
        break;

      default:
        console.log("not have any data");
      }
      
  }, [typeCount]);

    
    
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