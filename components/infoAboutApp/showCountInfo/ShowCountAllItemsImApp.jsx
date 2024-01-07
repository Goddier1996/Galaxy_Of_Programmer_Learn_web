import styles from "../../profileUser/css/favoriteUser.module.css"
import { useEffect, useState } from "react"
import { getAllCategories, getCategoryAllInfoVideoLearn, getCategoryAllInfoLinkLearn, getCategoryAllInfoFilesLearn, getAllUsers } from "../../../api-helpers/frontend/utils"
import ModelCountAndType from "./ModelCountAndType"



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
                    <ModelCountAndType img={"https://i.postimg.cc/fLsG9bT8/categories.png"} type={"Categories's"} count={countAllCategories} />
                    <ModelCountAndType img={"https://i.postimg.cc/wTC3v49v/documents.png"} type={"File's"} count={countAllFiles} />
                    <ModelCountAndType img={"https://i.postimg.cc/Tw1TQnTF/video-marketing.png"} type={"Video's"} count={countAllVideo} />
                    <ModelCountAndType img={"https://i.postimg.cc/g2pXstQ7/link.png"} type={"Link's"} count={countAllLinks} />
                    <ModelCountAndType img={"https://i.postimg.cc/sgZ4C99h/administrator-male.png"} type={"User's"} count={countAllUsers} />
                </div>
            </div>
        </div>
    )
}


export default ShowCountAllItemsImApp;