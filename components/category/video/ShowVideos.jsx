import UserSaveFavorite from "../optionUserClickSaveFavorite/UserSaveFavorite";
import styles from "../infoCategoryPage.module.css";
import UserDeleteFavorite from "../../profileUser/UserDeleteFavorite";


const ShowVideos = ({ data, use }) => {


  return (
    <div className={styles.videoInfoCategory} key={data._id}>
      <p>
        {use == "info" ? data.titleVideo : use == "user" ? data.title : null}
        
        {use == "info" ? (
          <UserSaveFavorite
            favorite={data.video}
            title={data.titleVideo}
            type={data.type}
              idFavorite={data._id}
            />
        ) : use == "user" ? (
          <UserDeleteFavorite id={data._id} />
        ) : null}
      </p>

      <iframe
        allowFullScreen="allowFullScreen"
        src={use == "info" ? data.video : use == "user" ? data.favorite : null}
        alt="video Learn"
      />
    </div>
  );
};


export default ShowVideos;