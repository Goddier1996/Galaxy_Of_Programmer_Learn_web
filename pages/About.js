import styles from "../styles/about.module.css"
import ShowCountAllItemsImApp from "../components/infoAboutApp/ShowCountAllItemsImApp"
import { motion } from "framer-motion"
import { container } from "../components/StyleAnimation"
import TitleInfoAbout from "../components/infoAboutApp/TitleInfoAbout"


function About() {

  return (

    <motion.div variants={container} initial="hidden" animate="show">

      <TitleInfoAbout />

      <ShowCountAllItemsImApp />

      <div className={styles.infoContact}>
        <p>if You need more info Send Email to Address <br />artium20@gmail.com</p>
      </div>

    </motion.div>
  )
}


export default About