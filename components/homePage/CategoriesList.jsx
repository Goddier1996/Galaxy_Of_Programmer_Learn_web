import styles from "./home.module.css";
import CardModel from "../category/showCardsCategoryHomePage/CardModel";
import { useEffect, useState } from "react";
import { UseFetch } from "../../customHook/customHook";
import LoadingCircularProgressButton from "../tools/loading/LoadingCircularProgressButton";


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