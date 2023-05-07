import styles from "../styles/favoriteUser.module.css"
import { motion } from "framer-motion"
import { container, item } from "./StyleAnimation"
import { useEffect, useState } from "react"
import { getAllCategories, getCategoryAllInfoVideoLearn, getCategoryAllInfoLinkLearn, getCategoryAllInfoFilesLearn, getAllUsers } from "../api-helpers/frontend/utils"
import Image from 'next/image'
import CircularProgress from '@mui/material/CircularProgress';



const ShowCountAllItemsImApp = () => {

    const [countAllCategories, setCountAllCategories] = useState([])
    const [countAllVideo, setCountAllVideo] = useState([])
    const [countAllUsers, setCountAllUsers] = useState([])
    const [countAllFiles, setCountAllFIles] = useState([])
    const [countAllLinks, setCountAllLinks] = useState([])


    useEffect(() => {

        getAllCategories()
            .then((data) => setCountAllCategories(data))
            .catch((err) => console.log(err));

        getCategoryAllInfoFilesLearn()
            .then((data) => setCountAllFIles(data))
            .catch((err) => console.log(err));

        getCategoryAllInfoVideoLearn()
            .then((data) => setCountAllVideo(data))
            .catch((err) => console.log(err));

        getCategoryAllInfoLinkLearn()
            .then((data) => setCountAllLinks(data))
            .catch((err) => console.log(err));

        getAllUsers()
            .then((data) => setCountAllUsers(data))
            .catch((err) => console.log(err));

    }, [])



    return (

        <div className={styles.showData}>
            <div className={styles.circleModels}>
                <div className={styles.cardsInfoAbout} >

                    <div className={styles.box}>
                        <div className={styles.img}>
                            <div className={styles.inner}>
                                <div className={styles.skew}>
                                    <Image src="https://i.postimg.cc/fLsG9bT8/categories.png"
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
                            <h3>Categories's</h3>
                            {(countAllCategories.length === 0) ?
                                <motion.p variants={item}>
                                    <CircularProgress color="inherit" size={15} />
                                </motion.p>
                                : <motion.p variants={item}>{countAllCategories.length}</motion.p>}
                        </motion.div>
                    </div>


                    <div className={styles.box}>
                        <div className={styles.img}>
                            <div className={styles.inner}>
                                <div className={styles.skew}>
                                    <Image src="https://i.postimg.cc/wTC3v49v/documents.png"
                                        alt="icon documents"
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
                            <h3>File's</h3>
                            {(countAllFiles.length === 0) ?
                                <motion.p variants={item}>
                                    <CircularProgress color="inherit" size={15} />
                                </motion.p>
                                : <motion.p variants={item}>{countAllFiles.length}</motion.p>}
                        </motion.div>
                    </div>


                    <div className={styles.box}>
                        <div className={styles.img}>
                            <div className={styles.inner}>
                                <div className={styles.skew}>
                                    <Image src="https://i.postimg.cc/Tw1TQnTF/video-marketing.png"
                                        alt="icon video"
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
                            <h3>Video's</h3>
                            {(countAllVideo.length === 0) ?
                                <motion.p variants={item}>
                                    <CircularProgress color="inherit" size={15} />
                                </motion.p>
                                : <motion.p variants={item}>{countAllVideo.length}</motion.p>}
                        </motion.div>
                    </div>


                    <div className={styles.box}>
                        <div className={styles.img}>
                            <div className={styles.inner}>
                                <div className={styles.skew}>
                                    <Image src="https://i.postimg.cc/g2pXstQ7/link.png"
                                        alt="icon link"
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
                            <h3>Link's</h3>
                            {(countAllLinks.length === 0) ?
                                <motion.p variants={item}>
                                    <CircularProgress color="inherit" size={15} />
                                </motion.p>
                                : <motion.p variants={item}>{countAllLinks.length}</motion.p>}
                        </motion.div>
                    </div>



                    <div className={styles.box}>
                        <div className={styles.img}>
                            <div className={styles.inner}>
                                <div className={styles.skew}>
                                    <Image src="https://i.postimg.cc/sgZ4C99h/administrator-male.png"
                                        alt="icon user"
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
                            <h3>User's</h3>
                            {(countAllUsers.length === 0) ?
                                <motion.p variants={item}>
                                    <CircularProgress color="inherit" size={15} />
                                </motion.p>
                                : <motion.p variants={item}>{countAllUsers.length}</motion.p>}
                        </motion.div>
                    </div>

                </div>
            </div>

        </div>
    )
}


export default ShowCountAllItemsImApp