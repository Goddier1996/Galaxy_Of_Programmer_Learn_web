import styles from "./home.module.css";
import CardModel from "../category/showCardsCategoryHomePage/CardModel";
import LoadingCircularProgressButton from "../tools/loading/LoadingCircularProgressButton";



const CategoriesList = ({ data }) => {
 
  return (
    <div className={styles.listCategory}>
      {!data ? (
        <LoadingCircularProgressButton whereUse="loadingCategories" />
      ) : (
        <>
          {data.map((category) => (
            <CardModel key={category._id} data={category} />
          ))}
        </>
      )}
    </div>
  );
};


export default CategoriesList;