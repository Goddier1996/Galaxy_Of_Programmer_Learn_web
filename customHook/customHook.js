import { useEffect, useState } from "react";
import { getAllCategories,getCategoryIdInfoFilesLearn, favoriteSaveIdUserFIle, getCategoryIdInfoLinkLearn, favoriteSaveIdUserLink, favoriteSaveIdUserVideo, getCategoryIdInfoVideoLearn } from "../api-helpers/frontend/utils";


// here fetch all data from database
export const UseFetch = (typeFetchData,id,typeFile) => {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchData = () => {

    setLoading(true);
  
    switch (typeFetchData) {

      case "ShowAllCategories":
        getAllCategories()
          .then((dataCategory) => setData(dataCategory))
          .then(() => setLoading(false))
          .catch((err) => setLoading(true))
        break;
  
      case "user":
        switch (typeFile) {
          case "File":
            favoriteSaveIdUserFIle(id)
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => setLoading(true))
            break;
  
          case "Link":
            favoriteSaveIdUserLink(id)
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => setLoading(true))
            break;
  
          case "Video":
            favoriteSaveIdUserVideo(id)
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => setLoading(true))
            break;
        }
        break;
  
      case "info":
  
        switch (typeFile) {
          case "File":
            getCategoryIdInfoFilesLearn(id)
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => setLoading(true))
            break;
  
          case "Link":
            getCategoryIdInfoLinkLearn(id)
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => setLoading(true))
            break;
  
          case "Video":
            getCategoryIdInfoVideoLearn(id)
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => setLoading(true))
            break;
  
        }
        break;
  
      default:
        // setError(`${error} Could not Fetch Data `);
        setLoading(true);
    }
  };


  useEffect(() => {

    fetchData();
  }, [typeFetchData, id, typeFile]);

  return { data, loading, error };
};