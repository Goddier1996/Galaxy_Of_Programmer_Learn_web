import { getCategoryIdInfo } from "../../api-helpers/frontend/utils";
import InfoCategory from "../../components/category/infoCategory/InfoCategory"


const CategoryDetail = ({ detailsCategory }) => {
  return (
    <>
      <InfoCategory data={detailsCategory} />
    </>
  );
};

export default CategoryDetail;



export const getServerSideProps = async ({ params }) => {
  const res = await getCategoryIdInfo(params.id);

  return {
    props: { detailsCategory: res },
  };
};