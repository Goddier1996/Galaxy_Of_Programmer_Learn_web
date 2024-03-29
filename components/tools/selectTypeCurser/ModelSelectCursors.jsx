import React from "react";
import styles from "./modelSelectCursor.module.css";
import { motion } from "framer-motion";
import { container, item } from "../../StyleAnimation";
import dataOptionsCurser from "./jsonSelectCursor/JsonOptionsCursor.json";
import { applyCursorUserChoose } from "./function/ApplyCursor";
import { Modal } from "@mui/material";



const ModelSelectCursors = ({ open, hide }) => {


  return (
    <Modal open={open}>
      <div className={styles.positionPopUp}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={styles.styleModelCursors}
        >
          <motion.div variants={item} className={styles.titleSelectCurser}>
            <h1>
              Welcome to the Galaxy of programmers
              <br />
              Let's start the journey in space
            </h1>
            <h6>Choose your spaceship</h6>
            <p>The spaceship will be your cursor style in this app</p>
          </motion.div>

          <div className={styles.choiceCurser}>
            {dataOptionsCurser.arrayCursors.map((item) => (
              <motion.div
                variants={item}
                className={styles.cursorsImage}
                key={item.id}
              >
                <img
                  src={item.LinkImage}
                  alt={item.LinkImage}
                  onClick={() => applyCursorUserChoose(item.LinkImage, hide)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Modal>
  );
};


export default ModelSelectCursors;