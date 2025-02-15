import { useMediaQuery } from "react-responsive";
import Button from "../button/button.component";
import Stars from "../stars/stars.component";
import Video from "../video/video.component";
import assets from "../../assets";
import styles from "./start.module.scss";

interface StartProps {
  onStart?: () => void;
}

const Start: React.FC<StartProps> = ({ onStart }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <div className={styles.start}>
      <div className="container">
        <Video video={"rtbvjxvj79xggqijbofg"} />
        <div className={styles.startContent}>
          {isMobile && <Stars />}
          <div className={styles.flexContainer}>
            <div className={styles.flexItem}>
              <hr />
            </div>
            <div className={styles.flexItemCenter}>
              <div className={"flex-center"}>
                <img
                  src={assets.poweredBy}
                  width="74"
                  height="64"
                  alt="powered-by"
                />
                <img
                  src={assets.psiLogo}
                  width="99"
                  height="92"
                  alt="blend-logo"
                />
              </div>
            </div>
            <div className={styles.flexItem}>
              <hr />
            </div>
          </div>
          <div className={styles.wlcm}>Welcome to Another world</div>
          <div className={styles.company}>
            {!isMobile && <Stars />}
            METAVERSE
            {!isMobile && <Stars />}
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
