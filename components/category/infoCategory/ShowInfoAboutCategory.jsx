import { motion } from "framer-motion"
import { container, item } from "../../StyleAnimation"
import Image from 'next/image'
import styles from "../infoCategoryPage.module.css"



const ShowInfoAboutCategory = ({ data }) => {

    return (
        <>
            <div className={styles.showInfoAboutCategory}>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    id={styles.one}>
                    <motion.div
                        variants={item}
                        className={styles.imageAboutCategory}>

                        <Image
                            src={data.imageLanguage}
                            alt="category image info"
                            width={400}
                            height={400} />
                    </motion.div>
                </motion.div>


                <div id={styles.two}>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className={styles.textAboutCategory}>

                        <motion.h1 variants={item}>About Category :</motion.h1>
                        <motion.p variants={item}>{data.aboutCategory}</motion.p>
                        <br />
                        <motion.h1 variants={item}>Why Use :</motion.h1>
                        <motion.p variants={item}>{data.whyUse}</motion.p>
                        <br />
                        <motion.h1 variants={item}>Used For :</motion.h1>
                        <motion.p variants={item}>{data.usedFor}</motion.p>
                    </motion.div>

                </div>
            </div>
        </>
    )
}

export default ShowInfoAboutCategory