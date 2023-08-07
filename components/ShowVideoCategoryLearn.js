import { useEffect, useState } from 'react'
import { Box, CircularProgress } from '@mui/material';
import { getCategoryIdInfoVideoLearn } from "../api-helpers/frontend/utils"
import UserSaveFavorite from './UserSaveFavorite';
import styles from "../styles/infoCategoryPage.module.css"



const ShowVideoCategoryLearn = ({ idCategoryVideo }) => {

    const [InfoCategoryVideoLearn, setInfoCategoryVideoLearn] = useState([]);
    const [loadingVideo, setLoadingVideo] = useState(false);


    useEffect(() => {

        const controller = new AbortController();

        setLoadingVideo(true)
        getCategoryIdInfoVideoLearn(idCategoryVideo, { signal: controller.signal })
            .then((dataCategory) => setInfoCategoryVideoLearn(dataCategory))
            .then(() => setLoadingVideo(false))
            .catch((err) => console.log(err));

        return () => {
            controller.abort()
        }

    }, [idCategoryVideo])




    return (

        <>
            <Box>
                <div className={styles.line}>

                    {(loadingVideo) ?
                        <div style={{ color: "gray", display: "flex", justifyContent: "center" }}>
                            <CircularProgress color="inherit" size={30} />
                        </div>
                        :
                        <div className={styles.StyleAllShowData}>
                            {(InfoCategoryVideoLearn.length !== 0) ?
                                <>
                                    {InfoCategoryVideoLearn.map(InfoCategory => (

                                        <div className={styles.videoInfoCategory} key={InfoCategory._id}>
                                            {(InfoCategory._id) ?
                                                <>
                                                    <p>{InfoCategory.titleVideo}
                                                        <UserSaveFavorite
                                                            favorite={InfoCategory.video}
                                                            title={InfoCategory.titleVideo}
                                                            type={InfoCategory.type}
                                                            idFavorite={InfoCategory._id}
                                                        />
                                                    </p>
                                                    <iframe allowFullScreen='allowFullScreen' src={InfoCategory.video} alt="video Learn" />
                                                </>
                                                :
                                                <div style={{ color: "gray" }}>
                                                    <CircularProgress color="inherit" size={25} />
                                                </div>
                                            }
                                        </div>
                                    ))}
                                </>
                                :
                                <div className={styles.noHaveFiles}>
                                    Not Have Now FIles Sorry
                                </div>
                            }
                        </div>
                    }
                </div>
            </Box>
        </>
    )
}

export default ShowVideoCategoryLearn