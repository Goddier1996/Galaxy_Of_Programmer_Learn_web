import styles from "./home.module.css";
import CardModel from "../category/showCardsCategoryHomePage/CardModel";
import { UseFetch } from "../../customHook/customHook";
import LoadingCircularProgressButton from "../tools/loading/LoadingCircularProgressButton";


// const CategoriesList = ({ data }) => {
const CategoriesList = () => {


    // custom hook fetch data
  const { data, loading } = UseFetch("ShowAllCategories", null, null);
  
 
  return (
    <div className={styles.listCategory}>
      {loading ? (
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