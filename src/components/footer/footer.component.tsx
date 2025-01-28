import { useMediaQuery } from "react-responsive";
import { useActiveLink } from "../../context/ActiveLinkContext";
import styles from "./footer.module.scss";
import assets from "../../assets";

const Footer = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const { activeLink, setActiveLink } = useActiveLink();

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <footer className={styles.customFooter}>
      <div className="container">
        <div className="row">
          <div className={isMobile ? "col-md-12 p-0" : "col-lg-4 col-md-4"}>
            <div className="flex-center align-items-center">
              <img src={assets.psiLogo} alt="blend-logo" />
              {isMobile && <hr className="w-100" />}
              <div className="d-block">
                <div>Powered by</div>
                <img src={assets.poweredBy} alt="powered-by" />
              </div>
            </div>
          </div>
          {!isMobile && (
            <>
              <div className="col-lg-4 col-md-4 d-flex justify-content-center align-items-center">
                <ul className="flex-center align-items-center">
                  {["about", "features", "how-it-works", "contact"]?.map(
                    (link, index) => (
                      <li key={index}>
                        <a
                          key={link}
                          href={`#${link}`}
                          className={activeLink === link ? styles.active : ""}
                          onClick={() => onUpdateActiveLink(link)}
                        >
                          {link.charAt(0).toUpperCase() + link.slice(1)}
                        </a>
                      </li>
                    )
                  )}
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
            </>
          )}
        </div>
        {!isMobile && (
          <>
            <hr />
            <div className={styles.rights}>
              {`@ ${new Date().getFullYear()} PSI.All Rights Reserved`}
            </div>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
