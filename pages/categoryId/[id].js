import { getCategoryIdInfo } from "../../api-helpers/frontend/utils";
import InfoCategory from '../../components/InfoCategory'
// import dynamic from 'next/dynamic'

// const InfoCategory = dynamic(() => import('../../components/InfoCategory'), {
//     ssr: false,
// })




function CategoryDetail({ detailsCategory }) {

    return (
        <>
            <InfoCategory data={detailsCategory} />
        </>
    )
}

export default CategoryDetail





// Getting Orders by ID from API
export const getServerSideProps = async ({ params }) => {

    const res = await getCategoryIdInfo(params.id);

    return {
        props: { detailsCategory: res },
    };
};
