import { getCategoryIdInfo } from "../../api-helpers/frontend/utils";
import CircularProgress from "@mui/material/CircularProgress";
import dynamic from "next/dynamic";

const InfoCategory = dynamic(
  () => import("../../components/category/infoCategory/InfoCategory"),
  {
    loading: () => (
      <div
        style={{
          color: "gray",
          display: "flex",
          justifyContent: "center",
          marginBottom: "20%",
          marginTop: "20%",
        }}
      >
        <CircularProgress color="inherit" size={60} />
      </div>
    ),
  }
);


const CategoryDetail = ({ detailsCategory }) => {
  return (
    <>
      <InfoCategory data={detailsCategory} />
    </>
  );
};

export default CategoryDetail;



// Getting Orders by ID from API
export const getServerSideProps = async ({ params }) => {
  const res = await getCategoryIdInfo(params.id);

  return {
    props: { detailsCategory: res },
  };
};
