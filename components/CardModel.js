import { motion } from "framer-motion"
import { container, item } from "./StyleAnimation"
import Image from 'next/image'
import styles from "../styles/home.module.css"
import Link from 'next/link'


const CardModel = ({ data }) => {

    return (

        <motion.div
            variants={container}
            initial="hidden"
            animate="show">
            <Link href={`/categoryId/${data._id}`} passHref>
                <div className={styles.cards}>
                    <motion.div variants={item} className={styles.card_image}>
                        <Image
                            src={data.image}
                            alt={data.image}
                            width={100}
                            height={100}
                            priority
                        />
                    </motion.div>
                </div>
            </Link>
        </motion.div>
    )
}


export default CardModel