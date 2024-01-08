import React, { useEffect, useState } from "react";
import styles from "../../profileUser/css/favoriteUser.module.css";
import { motion } from "framer-motion";
import { container, item } from "../../StyleAnimation";
import Image from "next/image";
import CircularProgress from "@mui/material/CircularProgress";
import { CountFetch } from "../../../customHook/customHookFetchCount";


const ModelCountAndType = ({ img, type }) => {


  const [countInfo, setCountInfo] = useState({});

  // custom hook fetch data
  const { data, loading, error } = CountFetch(countInfo);

    
  useEffect(() => {
    
    let opjDataFetch = {};

    switch (type) {
      case "Categories's":
        opjDataFetch = {
          typeFile: "Categories's",
          idUser:null
        };
        setCountInfo(opjDataFetch);
        break;

      case "File's":
        opjDataFetch = {
          typeFile: "File's",
          idUser:null
        };
        setCountInfo(opjDataFetch);
        break;

      case "Video's":
        opjDataFetch = {
          typeFile: "Video's",
          idUser:null
        };
        setCountInfo(opjDataFetch);
        break;

      case "Link's":
        opjDataFetch = {
          typeFile: "Link's",
          idUser:null
        };
        setCountInfo(opjDataFetch);
        break;

      case "User's":
        opjDataFetch = {
          typeFile: "User's",
          idUser:null
        };
        setCountInfo(opjDataFetch);
        break;

      default:
        console.log("not have any data");
      }
      
  }, [type]);

    
    
  return (
    <div className={styles.box}>
      <div className={styles.img}>
        <div className={styles.inner}>
          <div className={styles.skew}>
            <Image
              src={img}
              alt="icon categories"
              width={40}
              height={45}
              priority
            />
          </div>
        </div>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={styles.text}
      >
        <h3>{type}</h3>
        {loading ? (
          <motion.p variants={item}>
            <CircularProgress color="inherit" size={15} />
          </motion.p>
        ) : (
          <motion.p variants={item}>{data.length}</motion.p>
        )}
      </motion.div>
    </div>
  );
};


export default ModelCountAndType;