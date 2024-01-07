import ShowCountAllItemsImApp from "../components/infoAboutApp/showCountInfo/ShowCountAllItemsImApp"
import { motion } from "framer-motion"
import { container } from "../components/StyleAnimation"
import TitleInfoAbout from "../components/infoAboutApp/TitleInfoAbout"


function About() {

  return (

    <motion.div variants={container} initial="hidden" animate="show">

      <TitleInfoAbout />

      <ShowCountAllItemsImApp />

    </motion.div>
  )
}


export default About;