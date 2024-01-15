import styles from "./home.module.css";
import CardModel from "../category/showCardsCategoryHomePage/CardModel";
import { useEffect, useState } from "react";
import { UseFetch } from "../../customHook/customHook";
import LoadingCircularProgress from "../tools/loading/LoadingCircularProgress";


// const CategoriesList = ({ data }) => {
const CategoriesList = () => {
  const [InfoCategoryLearn, setInfoCategoryLearn] = useState({});

  // custom hook fetch data
  const { data, loading, error } = UseFetch(InfoCategoryLearn);

    
  useEffect(() => {
    let opjDataFetch = {
      typeHowUse: "ShowAllCategories",
    };
    setInfoCategoryLearn(opjDataFetch);
  }, []);

    
  return (
    <div className={styles.listCategory}>
      {loading ? (
        <LoadingCircularProgress />
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