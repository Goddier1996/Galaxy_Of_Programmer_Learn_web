import { motion } from "framer-motion"
import { container, item } from "../StyleAnimation"
import styles from "./home.module.css"
import Image from 'next/image'



const ShowHomeTitle = () => {

    return (
        <>
            <motion.div variants={container} initial="hidden" animate="show" >
                <motion.div variants={item} className={styles.info}>

                    <motion.h1 variants={item}>
                        <span>Welcome</span>
                        <span>to</span>
                        <span>Galaxy</span>
                        <span>of</span>
                        <span>programmers</span>
                    </motion.h1>

                    <motion.p variants={item}>Here you can learn very common technologies <br /> in the world of programming</motion.p>

                    <motion.div variants={item}>
                        <Image src='https://i.postimg.cc/cHm55PJC/mm1.webp' alt='drown choose category'
                            width={180}
                            height={100}
                            priority />
                    </motion.div>

                </motion.div>
            </motion.div>

            <motion.div variants={container} initial="hidden" animate="show" className={styles.ChooseCategory}>

                <motion.p variants={item}>Choose a category<br /> which technology you would like to learn</motion.p>

                <div className={styles.arrow}>
                    <motion.div variants={item}>
                        <Image src='https://i.postimg.cc/Xqqx1Jh1/y1.webp' alt='drown choose category'
                            width={100}
                            height={100}
                            priority
                        />
                    </motion.div>
                </div>

            </motion.div>
        </>
    )
}

export default ShowHomeTitle;