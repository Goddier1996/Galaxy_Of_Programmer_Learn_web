import React from 'react'
import styles from "../profileUser/css/favoriteUser.module.css"
import { motion } from "framer-motion"
import { container, item } from "../StyleAnimation"
import Image from 'next/image'
import CircularProgress from '@mui/material/CircularProgress';



const ModelCountAndType = ({ img, type, count }) => {

    return (
        <div className={styles.box}>
            <div className={styles.img}>
                <div className={styles.inner}>
                    <div className={styles.skew}>
                        <Image src={img}
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
                className={styles.text}>
                <h3>{type}</h3>
                {(count.length === 0) ?
                    <motion.p variants={item}>
                        <CircularProgress color="inherit" size={15} />
                    </motion.p>
                    : <motion.p variants={item}>{count.length}</motion.p>}
            </motion.div>
        </div>
    )
}

export default ModelCountAndType;