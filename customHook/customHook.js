import { useEffect, useState } from "react";
import { getAllCategories,getCategoryIdInfoFilesLearn, favoriteSaveIdUserFIle, getCategoryIdInfoLinkLearn, favoriteSaveIdUserLink, favoriteSaveIdUserVideo, getCategoryIdInfoVideoLearn } from "../api-helpers/frontend/utils";


// here fetch all data from database
export const UseFetch = (funcFetchData) => {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchData = () => {

    setLoading(true);
  
    switch (funcFetchData.typeHowUse) {

      case "ShowAllCategories":
        getAllCategories()
          .then((dataCategory) => setData(dataCategory))
          .then(() => setLoading(false))
          .catch((err) => setLoading(true))
        break;
  
      case "user":
        switch (funcFetchData.typeFile) {
          case "File":
            favoriteSaveIdUserFIle(funcFetchData.id)
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => setLoading(true))
            break;
  
          case "Link":
            favoriteSaveIdUserLink(funcFetchData.id)
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => setLoading(true))
            break;
  
          case "Video":
            favoriteSaveIdUserVideo(funcFetchData.id)
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => setLoading(true))
            break;
        }
        break;
  
      case "info":
  
        switch (funcFetchData.typeFile) {
          case "File":
            getCategoryIdInfoFilesLearn(funcFetchData.id)
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => setLoading(true))
            break;
  
          case "Link":
            getCategoryIdInfoLinkLearn(funcFetchData.id)
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => setLoading(true))
            break;
  
          case "Video":
            getCategoryIdInfoVideoLearn(funcFetchData.id)
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
  }, [funcFetchData]);

  return { data, loading, error };
};