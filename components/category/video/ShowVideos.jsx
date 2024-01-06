import React from "react";
import { CircularProgress } from "@mui/material";
import UserSaveFavorite from "../optionUserClickSaveFavorite/UserSaveFavorite";
import UserDeleteFavorite from "../../profileUser/UserDeleteFavorite";
import styles from "../infoCategoryPage.module.css";


const ShowVideos = ({ data, use }) => {


  // show if howUse = userProfile , we show in profile , or info show in page info category
  switch (use) {
    
    case "userProfile":
      favoriteSaveIdUserVideo(idCategoryVideo, { signal: controller.signal });
      var { _id, title, favorite, type } = data;
      break;

    case "info":
      var { _id, titleVideo, video, type } = data;
      break;

    default:
      console.log("not have any data");
  }

    
    
  return (
    <>
      {use == "info" ? (
        <>
          <div className={styles.videoInfoCategory} key={_id}>
            {_id ? (
              <>
                <p>
                  {titleVideo}
                  <UserSaveFavorite
                    favorite={video}
                    title={titleVideo}
                    type={type}
                    idFavorite={_id}
                  />
                </p>
                <iframe
                  allowFullScreen="allowFullScreen"
                  src={video}
                  alt="video Learn"
                />
              </>
            ) : (
              <div style={{ color: "gray" }}>
                <CircularProgress color="inherit" size={25} />
              </div>
            )}
          </div>
        </>
      ) : use == "userProfile" ? (
        <div className={styles.videoInfoCategory} key={_id}>
          {_id ? (
            <>
              <p>
                {title}
                <UserDeleteFavorite id={_id} />
              </p>
              <iframe
                allowFullScreen="allowFullScreen"
                src={favorite}
                alt="video Learn"
              />
            </>
          ) : (
            <div style={{ color: "gray" }}>
              <CircularProgress color="inherit" size={25} />
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};


export default ShowVideos;