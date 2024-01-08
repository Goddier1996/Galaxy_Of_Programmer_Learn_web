import styles from "../../profileUser/css/favoriteUser.module.css"
import ModelCountAndType from "./ModelCountAndType"


const ShowCountAllItemsImApp = () => {

    return (
        <div className={styles.showData}>
            <div className={styles.circleModels}>
                <div className={styles.cardsInfoAbout} >
                    <ModelCountAndType img={"https://i.postimg.cc/fLsG9bT8/categories.png"} type={"Categories's"} />
                    <ModelCountAndType img={"https://i.postimg.cc/wTC3v49v/documents.png"} type={"File's"} />
                    <ModelCountAndType img={"https://i.postimg.cc/Tw1TQnTF/video-marketing.png"} type={"Video's"} />
                    <ModelCountAndType img={"https://i.postimg.cc/g2pXstQ7/link.png"} type={"Link's"} />
                    <ModelCountAndType img={"https://i.postimg.cc/sgZ4C99h/administrator-male.png"} type={"User's"} />
                </div>
            </div>
        </div>
    )
}

export default ShowCountAllItemsImApp;