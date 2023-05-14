import { getAllCategories } from "../api-helpers/frontend/utils"
import ShowHomeTitle from "../components/ShowHomeTitle";
import CircularProgress from '@mui/material/CircularProgress';
import dynamic from 'next/dynamic'


const CategoriesList = dynamic(() => import('../components/CategoriesList'), {
  loading: () => <div style={{ color: "gray", display: "flex", justifyContent: "center" }}>
    <CircularProgress color="inherit" size={30} />
  </div>,
});



const Index = ({ categories }) => {


  return (

    <>
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
