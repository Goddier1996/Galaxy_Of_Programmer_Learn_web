import styles from "../../styles/favoriteUser.module.css"
import { CircularProgress } from '@mui/material';
import { motion } from "framer-motion"
import { container, item } from "../StyleAnimation"


const ShowCount = ({ img, count, typeCount }) => {

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
                className={styles.text}>
                <h3>{typeCount}</h3>
                {(count.length === 0) ?
                    <motion.p variants={item}>
                        <CircularProgress color="inherit" size={15} />
                    </motion.p>
                    : <motion.p variants={item}>{count.length}</motion.p>}
            </motion.div>
        </div>
    )
}

export default ShowCount;