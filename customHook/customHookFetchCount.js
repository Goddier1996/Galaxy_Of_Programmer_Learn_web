import { useEffect, useState } from "react";
import { getAllCategories, getCategoryAllInfoVideoLearn, getCategoryAllInfoLinkLearn, getCategoryAllInfoFilesLearn, getAllUsers, favoriteSaveIdUserFIle, favoriteSaveIdUserVideo, favoriteSaveIdUserLink } from "../api-helpers/frontend/utils";


// here take count items from database
export const CountFetch = (typeFetchData,idUser) => {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const countData = () => {

        setLoading(true);

        switch (typeFetchData) {
            case "Categories's":
                getAllCategories()
                    .then((dataCategory) => setData(dataCategory))
                    .then(() => setLoading(false))
                    .catch((err) => setLoading(true))
                break;

            case "File's":
                getCategoryAllInfoFilesLearn()
                    .then((dataCategory) => setData(dataCategory))
                    .then(() => setLoading(false))
                    .catch((err) => setLoading(true))
                break;

            case "Video's":
                getCategoryAllInfoVideoLearn()
                    .then((dataCategory) => setData(dataCategory))
                    .then(() => setLoading(false))
                    .catch((err) => setLoading(true))
                break;

            case "Link's":
                getCategoryAllInfoLinkLearn()
                    .then((dataCategory) => setData(dataCategory))
                    .then(() => setLoading(false))
                    .catch((err) => setLoading(true))
                break;

            case "User's":
                getAllUsers()
                    .then((dataCategory) => setData(dataCategory))
                    .then(() => setLoading(false))
                    .catch((err) => setLoading(true))
                break;

            case "Link'sIdUser":
                favoriteSaveIdUserLink(idUser||"")
                    .then((dataCategory) => setData(dataCategory))
                    .then(() => setLoading(false))
                    .catch((err) => setLoading(true))
                break;

            case "File'sIdUser":
                favoriteSaveIdUserFIle(idUser||"")
                    .then((dataCategory) => setData(dataCategory))
                    .then(() => setLoading(false))
                    .catch((err) => setLoading(true))
                break;

            case "Video'sIdUser":
                favoriteSaveIdUserVideo(idUser||"")
                    .then((dataCategory) => setData(dataCategory))
                    .then(() => setLoading(false))
                    .catch((err) => setLoading(true))
                break;

            default:
                // setError(`${error} Could not Fetch Data `);
                setLoading(true);
        }
    };


    useEffect(() => {

        countData();
    }, [typeFetchData, idUser]);

    return { data, loading, error };
};