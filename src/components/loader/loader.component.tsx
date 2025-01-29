import assets from "../../assets";
import styles from "./loader.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <video
        src={assets.loading}
        className={styles.bckVideo}
        autoPlay
        loop
        muted
      />
      <img src={assets.layer} alt="layer" className={styles.layerLogo} />
      <div className={styles.container}>
        <div className={styles.animatedLetters}>
          <img src={assets.iLetter} alt="i-letter" />
          <img src={assets.pLetter} alt="p-letter" />
          <img src={assets.sLetter} alt="s-letter" />
        </div>
        <div className={styles.loadingText}>Loading...</div>
      </div>
    </div>
  );
};

export default Loading;
