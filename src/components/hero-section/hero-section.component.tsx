import { Navbar, Nav, Row, Col } from "react-bootstrap";
import assets from "../../assets";
import Button from "../button/button.component";
import { useActiveLink } from "../../context/ActiveLinkContext";
import styles from "./hero-section.module.scss";

const Hero = () => {
  const { activeLink, setActiveLink } = useActiveLink();

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <header className={styles.hero} id="home">
      <div className="container">
        <Navbar expand="md" className={styles.navbar}>
          <div className={styles.navbarWrapper}>
            <Navbar.Brand href="/">
              <img src={assets.layer} alt="layer" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={`${styles.navWrapperUl} ms-auto`}>
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
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <video src={assets.hero} autoPlay loop muted />
        <Row>
          <Col className="col-xlg-6 col-lg-6">
            <div className={styles.letsTry}>
              <div>
                <h1>WELCOME TO</h1>
                <h1>THE FUTURE OF</h1>
                <h1>REAL ESTATE IN THE</h1>
                <span>METAVERSE</span>
              </div>
              <div className="mt-2">
                <Button
                  imgSrc={assets.placholder}
                  altText={"placholder"}
                  text={"Try it for free"}
                />
              </div>
            </div>
          </Col>
          <Col className="col-xlg-6 col-lg-6">
            <img src={assets.logo} alt="logo" className={styles.logo} />
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default Hero;
