import { useEffect } from "react";
import { getAllCategories } from "../api-helpers/frontend/utils";
import ShowHomeTitle from "../components/homePage/ShowHomeTitle";
import ModelSelectCursors from "../components/tools/selectTypeCurser/ModelSelectCursors";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import LoadingLinearProgress from "../components/tools/loading/LoadingLinearProgress";
import dynamic from "next/dynamic";
const CategoriesList = dynamic(() => import('../components/homePage/CategoriesList'))



const Index = ({ categories }) => {


  const [showModel, setShowModel] = useState(false);
  const handleShowModel = () => setShowModel(true);

  // here if mobile screen, NOT use popUp choose type cursor
  const mobileScreen = useMediaQuery("(min-width:991px)", { noSsr: true });

  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState({});


  const loadingData = async () => {

    setIsLoading(true);
    const tempPosts = await categories?.posts;
    setPosts(posts);
    setIsLoading(false);

    let typeCursor = sessionStorage.getItem("typeCursor");

    if (typeCursor == null && mobileScreen) {
      window.scrollTo(0, 0);
      handleShowModel();
    }
  };


  useEffect(() => {
    loadingData();
  }, []);


  return (
    <>
      {isLoading ? (
        <LoadingLinearProgress />
      ) : (
        <>
          <ModelSelectCursors
            open={showModel}
            hide={() => setShowModel(false)}
          />

          <ShowHomeTitle />

          <CategoriesList data={categories} />
        </>
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

// export const getServerSideProps = async () => {

//   const categories = await getAllCategories();

//   return {
//     props:
//     {
//       categories
//     }
//   }
// }

// const hideModelSignIn = () => {
//   window.location.reload(false);
// }

{
  /* <CategoriesList data={categories} /> */
}

// import dynamic from 'next/dynamic'
