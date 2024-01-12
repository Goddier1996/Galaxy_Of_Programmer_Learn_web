import { useEffect } from "react";
import { getAllCategories } from "../api-helpers/frontend/utils";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import LoadingLinearProgress from "../components/tools/loading/LoadingLinearProgress";
import CategoriesList from "../components/homePage/CategoriesList";
const ShowHomeTitle = dynamic(() =>
  import("../components/homePage/ShowHomeTitle"));
const ModelSelectCursors = dynamic(() =>
  import("../components/tools/selectTypeCurser/ModelSelectCursors"));



const Index = ({ categories }) => {


  const [showModel, setShowModel] = useState(false);
  const handleShowModel = () => setShowModel(true);

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
      <ModelSelectCursors open={showModel} hide={() => setShowModel(false)} />

      <ShowHomeTitle />

      {/* check if have data categories from api show them,if no show loading */}
      {!categories ? (
        <LoadingLinearProgress />
      ) : (
        <CategoriesList data={categories} />
      )}
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
