import assets from "../../assets";
import styles from "./loader.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src={assets.layer} alt="layer" className={styles.layerLogo} />
      <div className="container">
        <video src={assets.loading} autoPlay loop muted />
        <div className={styles.middleContent}>
          <img src={assets.animatedLogo} alt="animated-logo" />
          <div>Loading...</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
