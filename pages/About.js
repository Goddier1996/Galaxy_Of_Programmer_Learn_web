import styles from "../styles/about.module.css"
import ShowCountAllItemsImApp from "../components/ShowCountAllItemsImApp"
import { motion } from "framer-motion"
import { container, item } from "../components/StyleAnimation"


function About() {

  return (

    <motion.div variants={container} initial="hidden" animate="show">

      <div className={styles.aboutInfoTitle}>
        <motion.h1 variants={item}>
          <span>Info</span>
          <span>About</span>
          <br />
          <span>School</span>
          <span>of</span>
          <span>Programmers</span>
        </motion.h1>
      </div>


      <div className={styles.infoWhatSchoolToDo}>
        <motion.p variants={item}>This school is suitable for beginners and advanced developers</motion.p>
      </div>


      <motion.div variants={item} className={styles.studentCan}>
        <p>Students can learn new technologies , according to the category he chooses.
          <br />
          Each category has a variety of options : Video, links to the site, files.
          A student can save what he liked and would like to learn in the future , <br />then you can see in the profile what he saved.
        </p>
      </motion.div>


      <ShowCountAllItemsImApp />

      <div className={styles.infoContact}>
        <p>if You need more info Send Email to Address <br />artium20@gmail.com</p>
      </div>

    </motion.div>
  )
}


export default About