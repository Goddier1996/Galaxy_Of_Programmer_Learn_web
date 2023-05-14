import ShowInfoAboutCategory from "./ShowInfoAboutCategory"
import styles from "../styles/infoCategoryPage.module.css"
import CircularProgress from '@mui/material/CircularProgress';
import dynamic from 'next/dynamic'

const TabsInfoCategory = dynamic(() => import('./TabsInfoCategory'), {
  ssr: false,
})


const InfoCategory = ({ data }) => {

  return (

    <>
      {(data.codeCategory) ?
        <>
          <ShowInfoAboutCategory data={data} />
          <TabsInfoCategory data={data.codeCategory} />
        </>
        :
        <div className={styles.loading}>
          <CircularProgress color="inherit" size={95} />
        </div>
      }
    </>
  )
}

export default InfoCategory