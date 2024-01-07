import styles from "../styles/404.module.css";


const PageNotFound = () => {

  return (
    <div className={styles.notFoundPage}>
      <section className={styles.error}>
        <span className={styles.four}>
          <span className={styles.screen}>4</span>
        </span>
        <span className={styles.zero}>
          <span className={styles.screen}>0</span>
        </span>
        <span className={styles.four}>
          <span className={styles.screen}>4</span>
        </span>
      </section>
    </div>
  );
};


export default PageNotFound;