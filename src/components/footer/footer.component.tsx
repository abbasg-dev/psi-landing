import styles from "./footer.module.scss";
import assets from "../../assets";

const Footer = () => {
  return (
    <footer className={styles.customFooter}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="flex-center align-items-center">
              <img src={assets.psiLogo} alt="blend-logo" />
              <div className="d-block">
                <div>Powered by</div>
                <img src={assets.poweredBy} alt="powered-by" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 d-flex justify-content-center align-items-center">
            <ul className="flex-center align-items-center">
              <li>About</li>
              <li>Features</li>
              <li>How it Works</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 d-flex justify-content-center align-items-center">
            <ul className="flex-center align-items-center">
              <li>
                <img src={assets.facebook} alt="facebook" />
              </li>
              <li>
                <img src={assets.twitter} alt="twitter" />
              </li>
              <li>
                <img src={assets.vimeo} alt="vimeo" />
              </li>
              <li>
                <img src={assets.instagram} alt="instagram" />
              </li>
              <li>
                <img src={assets.youtube} alt="youtube" />
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className={styles.rights}>
          {`@ ${new Date().getFullYear()} PSI.All Rights Reserved`}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
