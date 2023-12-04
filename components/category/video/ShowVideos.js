import React from 'react'
import { CircularProgress } from '@mui/material';
import UserSaveFavorite from '../UserSaveFavorite';
import styles from "../../../styles/infoCategoryPage.module.css"
import UserDeleteFavorite from '../../profileUser/UserDeleteFavorite';


const ShowVideos = ({ data, use }) => {

    if (use == "info") {
        var { _id, titleVideo, video, type } = data;
    }

    if (use == "user") {
        var { _id, title, favorite, type } = data;
    }


    return (
        <>
            {use == "info" ?
                <>
                    <div className={styles.videoInfoCategory} key={_id}>
                        {(_id) ?
                            <>
                                <p>{titleVideo}
                                    <UserSaveFavorite
                                        favorite={video}
                                        title={titleVideo}
                                        type={type}
                                        idFavorite={_id}
                                    />
                                </p>
                                <iframe allowFullScreen='allowFullScreen' src={video} alt="video Learn" />
                            </>
                            :
                            <div style={{ color: "gray" }}>
                                <CircularProgress color="inherit" size={25} />
                            </div>
                        }
                    </div>
                </>

                :
                use == "user" ?
                    <div className={styles.videoInfoCategory} key={_id}>
                        {(_id) ?
                            <>
                                <p>{title}
                                    <UserDeleteFavorite id={_id} />

                                </p>
                                <iframe allowFullScreen='allowFullScreen' src={favorite} alt="video Learn" />
                            </>
                            :
                            <div style={{ color: "gray" }}>
                                <CircularProgress color="inherit" size={25} />
                            </div>
                        }
                    </div> : ""
            }
        </>
    )
}

export default ShowVideos;