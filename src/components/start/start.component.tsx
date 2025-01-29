import Button from "../button/button.component";
import Stars from "../stars/stars.component";
import assets from "../../assets";
import styles from "./start.module.scss";

interface StartProps {
  onStart?: () => void;
}

const Start: React.FC<StartProps> = ({ onStart }) => {
  return (
    <div className={styles.start}>
      <div className="container">
        <video src={assets.start} autoPlay loop muted />
        <div className={styles.startContent}>
          <div className={styles.flexContainer}>
            <div className={styles.flexItem}>
              <hr />
            </div>
            <div className={styles.flexItemCenter}>
              <div className={"flex-center"}>
                <img src={assets.poweredBy} alt="powered-by" />
                <img src={assets.psiLogo} alt="blend-logo" />
              </div>
            </div>
            <div className={styles.flexItem}>
              <hr />
            </div>
          </div>
          <div className={styles.wlcm}>Welcome to Another world</div>
          <div className={styles.company}>
            <Stars />
            METAVERSE
            <Stars />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <Button
              altText={"start"}
              text={"Start"}
              click={onStart}
              btnClass="mt-5"
            />
          </div>
        </div>
      </div>
      <img
        src={assets.startEllipse}
        className={styles.startEllipse}
        alt="start-ellipse"
      />
    </div>
  );
};

export default Start;
