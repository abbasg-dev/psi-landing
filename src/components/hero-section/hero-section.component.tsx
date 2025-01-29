import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import assets from "../../assets";
import Button from "../button/button.component";
import ChatBotModal from "../chat-bot/chat-bot.component";
import { useActiveLink } from "../../context/ActiveLinkContext";
import { useToggle } from "../../context/ToggleContext";
import styles from "./hero-section.module.scss";

const Hero = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const { activeLink, setActiveLink } = useActiveLink();
  const { isToggleOpen, setIsToggleOpen } = useToggle();
  const [showChatBot, setShowChatBot] = useState<boolean>(false);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
    if (isMobile) {
      setIsToggleOpen(false);
    }
  };

  const handleToggle = () => {
    setIsToggleOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isMobile) {
      setIsToggleOpen(false);
    }
  }, [activeLink, isMobile]);

  return (
    <>
      <header
        className={
          isMobile && isToggleOpen
            ? `${styles.hero} ${styles.collapsed}`
            : `${styles.hero}`
        }
        id="home"
      >
        <div className="container">
          <Navbar expand="md" className={styles.navbar} expanded={isToggleOpen}>
            <div className={`${styles.navOrder} ${styles.navbarWrapper}`}>
              {!isToggleOpen && (
                <Navbar.Brand href="/">
                  <img src={assets.layer} alt="layer" />
                </Navbar.Brand>
              )}
              {isMobile && (
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  onClick={handleToggle}
                >
                  <img src={assets.menu} alt="menu" />
                </Navbar.Toggle>
              )}
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={`${styles.navWrapperUl} ms-auto`}>
                  <>
                    {isMobile && isToggleOpen && (
                      <div className={styles.menuTitle}>Menu</div>
                    )}
                    {["about", "features", "how-it-works", "contact"]?.map(
                      (link) => (
                        <Nav.Link
                          key={link}
                          href={`#${link}`}
                          className={
                            activeLink === link
                              ? `${styles.navbarLink} ${styles.active}`
                              : styles.navbarLink
                          }
                          onClick={() => onUpdateActiveLink(link)}
                        >
                          {link.charAt(0).toUpperCase() + link.slice(1)}
                        </Nav.Link>
                      )
                    )}
                  </>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
          {!isToggleOpen && (
            <>
              <video src={assets.hero} autoPlay loop muted />
              <Row className={styles.ordered}>
                <Col lg={6} md={12} className={"px-lg-2 px-md-0 px-0"}>
                  <div className={styles.letsTry}>
                    {isMobile ? (
                      <p className={styles.heroMsg}>
                        WELCOME TO THE FUTURE OF REAL ESTATE IN THE
                      </p>
                    ) : (
                      <>
                        <h1>WELCOME TO</h1>
                        <h1>THE FUTURE OF</h1>
                        <h1>REAL ESTATE IN THE</h1>
                      </>
                    )}
                    <span>METAVERSE</span>
                    <div
                      className={
                        isMobile
                          ? "d-flex align-items-center justify-content-center mt-5"
                          : "mt-2"
                      }
                    >
                      <Button
                        imgSrc={assets.placholder}
                        altText={"placholder"}
                        text={"Try it for free"}
                      />
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={12}>
                  <img src={assets.logo} alt="logo" className={styles.logo} />
                </Col>
              </Row>
            </>
          )}
          {isMobile && isToggleOpen && (
            <div className={styles.visit}>
              <button
                className={styles.help}
                onClick={() => setShowChatBot(true)}
              >
                Hello ! Need help ?
              </button>
              <ul className="d-flex align-items-center">
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
              <div className={styles.rights}>
                {`@ ${new Date().getFullYear()} PSI.All Rights Reserved`}
              </div>
            </div>
          )}
        </div>
        <img
          src={assets.heroRightEllipse}
          alt="hero-right-ellipse"
          className={styles.heroRightEllipse}
        />
        {isMobile && isToggleOpen && (
          <>
            <img
              src={assets.clientSelected}
              alt="client-selected"
              className={styles.clientSelected}
            />
            <img
              src={assets.heroEllipse}
              className={styles.heroEllipse}
              alt="hero-ellipse"
            />
            <img
              src={assets.heroEllipseBck}
              className={styles.heroEllipseBck}
              alt="hero-ellipse-bck"
            />
            <img
              src={assets.mobileVectaryLeft}
              className={styles.vectaryLeft}
              alt="vectary-left"
            />
          </>
        )}
      </header>
      <ChatBotModal
        onClose={() => setShowChatBot(false)}
        showChatBot={showChatBot}
      />
    </>
  );
};

export default Hero;
