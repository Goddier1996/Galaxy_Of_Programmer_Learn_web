import React from "react";
import UserSaveFavorite from "../optionUserClickSaveFavorite/UserSaveFavorite";
import styles from "../infoCategoryPage.module.css";
import UserDeleteFavorite from "../../profileUser/UserDeleteFavorite";



const ShowVideos = ({ data, use }) => {


  // show if howUse = userProfile , we show in profile , or info show in page info category
  if (use == "info") {
    var { _id, titleVideo, video, type } = data;
  }
  else if (use == "user") {
    var { _id, title, favorite, type } = data;
  }

  // switch (use) {

  //     case "userProfile":
  //         favoriteSaveIdUserVideo(idCategoryVideo, { signal: controller.signal })
  //         var { _id, title, favorite, type } = data;
  //         break;

  //     case "info":
  //         var { _id, titleVideo, video, type } = data;
  //         break;

  //     default:
  //         console.log("not have any data");
  // }

    
  return (
    <div className={styles.videoInfoCategory} key={_id}>
        <p>
          {use == "info" ? titleVideo : use == "user" ? title : null}
          {use == "info" ? (
            <UserSaveFavorite
              favorite={video}
              title={titleVideo}
              type={type}
              idFavorite={_id}
            />
          ) : use == "user" ? (
            <UserDeleteFavorite id={_id} />
          ) : null}
        </p>

        <iframe
          allowFullScreen="allowFullScreen"
          src={use == "info" ? video : use == "user" ? favorite : null}
          alt="video Learn"
        />
    </div>
  );
};


export default ShowVideos;