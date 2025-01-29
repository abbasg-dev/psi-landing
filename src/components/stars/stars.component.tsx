import assets from "../../assets";
import styles from "./stars.module.scss";

const Stars = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className={styles.starsContainer}>
        <img className={styles.star} src={assets.star} alt="star-1" />
        <img className={styles.star} src={assets.star} alt="star-2" />
        <img className={styles.star} src={assets.star} alt="star-3" />
      </div>
    </div>
  );
};

export default Stars;
