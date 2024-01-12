import ShowInfoAboutCategory from "./ShowInfoAboutCategory"
import dynamic from 'next/dynamic'
import LoadingCircularProgress from "../../tools/loading/LoadingCircularProgress";
const TabsInfoCategory = dynamic(() => import('../tabsInfo/TabsInfoCategory'))


const InfoCategory = ({ data }) => {

  return (
    <>
      {(data.codeCategory) ?
        <>
          <ShowInfoAboutCategory data={data} />
          <TabsInfoCategory idCategory={data.codeCategory} />
        </>
        :
         <LoadingCircularProgress/>
      }
    </>
  )
}

export default InfoCategory;