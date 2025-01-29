import assets from "../../assets";
import styles from "./title.module.scss";

type titleProps = {
  title?: string;
};
const Title = (props: titleProps) => {
  const { title } = props;
  return (
    <div className={styles.title}>
      <div className="d-flex justify-content-center">
        <div className={styles.starsContainer}>
          <img className={styles.star} src={assets.star} alt="star-1" />
          <img className={styles.star} src={assets.star} alt="star-2" />
          <img className={styles.star} src={assets.star} alt="star-3" />
        </div>
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Title;
