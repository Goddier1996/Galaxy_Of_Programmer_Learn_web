import { useEffect } from "react";
import { getAllCategories } from "../api-helpers/frontend/utils"
import ShowHomeTitle from "../components/ShowHomeTitle";
import dynamic from 'next/dynamic'
import ModelSelectCursors from "../components/ModelSelectCursors";
import { useState } from "react";
import { Modal, CircularProgress, useMediaQuery } from '@mui/material';


const CategoriesList = dynamic(() => import('../components/CategoriesList'), {
  loading: () => <div style={{ color: "gray", display: "flex", justifyContent: "center" }}>
    <CircularProgress color="inherit" size={30} />
  </div>,
});



const Index = ({ categories }) => {

  const [showModel, setShowModel] = useState(false);
  const handleShowModel = () => setShowModel(true);

  const mobileScreen = useMediaQuery('(min-width:991px)', { noSsr: true });


  useEffect(() => {

    let typeCursor = sessionStorage.getItem("typeCursor");

    if (typeCursor == null && mobileScreen) {
      window.scrollTo(0, 0);
      handleShowModel();
    }

  });



  const hideModelSignIn = () => {
    window.location.reload(false);
    // setShowModel(false);
  }



  return (
    <>
      <Modal open={showModel}  >
        <ModelSelectCursors hide={hideModelSignIn} />
      </Modal>

      <ShowHomeTitle />

      <CategoriesList data={categories} />
    </>
  )
}

export default Index;





export const getServerSideProps = async () => {

  const categories = await getAllCategories();

  return {
    props:
    {
      categories
    }
  }
}
