import { useEffect, useState } from "react";
import { getCategoryIdInfoFilesLearn, favoriteSaveIdUserFIle, getCategoryIdInfoLinkLearn, favoriteSaveIdUserLink, favoriteSaveIdUserVideo, getCategoryIdInfoVideoLearn } from "../api-helpers/frontend/utils";


// here fetch all data from database
export const UseFetch = (funcFetchData) => {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchData = async () => {

    setLoading(true);
  
    switch (funcFetchData.typeHowUse) {
  
      case "user":
        switch (funcFetchData.typeFile) {
          case "File":
            favoriteSaveIdUserFIle(funcFetchData.id)
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => console.log(err))
            break;
  
          case "Link":
            favoriteSaveIdUserLink(funcFetchData.id)
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => console.log(err))
            break;
  
          case "Video":
            favoriteSaveIdUserVideo(funcFetchData.id)
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => console.log(err))
            break;
        }
        break;
  
      case "info":
  
        switch (funcFetchData.typeFile) {
          case "File":
            getCategoryIdInfoFilesLearn(funcFetchData.id)
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => console.log(err))
            break;
  
          case "Link":
            getCategoryIdInfoLinkLearn(funcFetchData.id)
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => console.log(err))
            break;
  
          case "Video":
            getCategoryIdInfoVideoLearn(funcFetchData.id)
              .then((dataCategory) => setData(dataCategory))
              .then(() => setLoading(false))
              .catch((err) => console.log(err))
            break;
  
        }
        break;
  
      default:
        // setError(`${error} Could not Fetch Data `);
        setLoading(false);
    }
  
  };


  useEffect(() => {

    fetchData();
  }, [funcFetchData]);

  return { data, loading, error };
};
