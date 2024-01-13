import { useState } from "react";


// here open close Alerts or pop up
export const OpenCloseModelsPopUpAndAlert = () => {


    const [showModel, setShowModel] = useState(false);
    const handleShowModel = () => setShowModel(true);
    const handleCloseModel = () => setShowModel(false);

    const [showOneMoreModel, setShowOneMoreModel] = useState(false);
    const handleShowOneMoreModel = () => setShowOneMoreModel(true);
    const handleCloseOneMoreModel = () => setShowOneMoreModel(false);

    const [showTwoMoreModel, setShowTwoMoreModel] = useState(false);
    const handleShowTwoMoreModel = () => setShowTwoMoreModel(true);
    const handleCloseTwoMoreModel = () => setShowTwoMoreModel(false);

    const [showThereMoreModel, setShowThereMoreModel] = useState(false);
    const handleShowThereMoreModel = () => setShowThereMoreModel(true);
    const handleCloseThereMoreModel = () => setShowThereMoreModel(false);

    return {
        showModel, handleShowModel, handleCloseModel,
        showOneMoreModel, handleShowOneMoreModel, handleCloseOneMoreModel,
        showTwoMoreModel, handleShowTwoMoreModel, handleCloseTwoMoreModel,
        showThereMoreModel, handleShowThereMoreModel, handleCloseThereMoreModel
    };
};