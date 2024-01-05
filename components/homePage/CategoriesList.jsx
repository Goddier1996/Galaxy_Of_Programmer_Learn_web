import styles from "../../styles/home.module.css"
import CardModel from "../category/CardModel"


const CategoriesList = ({ data }) => {

    return (

        <div className={styles.listCategory}>

            {data.map(category => (
                <CardModel key={category._id} data={category} />
            ))}
        </div>
    )
}

export default CategoriesList