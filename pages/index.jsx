import { getAllCategories } from "../api-helpers/frontend/utils";
import dynamic from "next/dynamic";
import { useMediaQuery } from "@mui/material";
import { OpenCloseModelsPopUpAndAlert } from "../customHook/OpenCloseModelsPopUp";
import CategoriesList from "../components/homePage/CategoriesList";
import { useEffect } from "react";
const ShowHomeTitle = dynamic(() =>
  import("../components/homePage/ShowHomeTitle"));
const ModelSelectCursors = dynamic(() =>
  import("../components/tools/selectTypeCurser/ModelSelectCursors"));



const Index = ({ categories }) => {


  // open model pop up select typeCursor , custom hook
  const { showModel, handleShowModel, handleCloseModel } = OpenCloseModelsPopUpAndAlert();

  // here if mobile screen, NOT use popUp choose type cursor
  const mobileScreen = useMediaQuery("(min-width:991px)", { noSsr: true });



  useEffect(() => {
    let typeCursor = sessionStorage.getItem("typeCursor");

    if (typeCursor == null && mobileScreen) {
      window.scrollTo(0, 0);
      handleShowModel();
    }
  }, []);


  
  return (
    <>
      <ModelSelectCursors open={showModel} hide={() => handleCloseModel()} />
    
      <ShowHomeTitle />

      <CategoriesList data={categories} />
    </>
  );
};

export default Index;



export async function getServerSideProps() {
  return {
    props: (async function () {
      const categories = await getAllCategories();
      return {
        categories: categories,
      };
    })(),
  };
}
