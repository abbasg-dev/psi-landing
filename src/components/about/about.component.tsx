import { useMediaQuery } from "react-responsive";
import { Row, Col } from "react-bootstrap";
import Title from "../title/title.component";
import Button from "../button/button.component";
import assets from "../../assets";
import styles from "./about.module.scss";

const About = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.aboutWrapper}>
          {isMobile && (
            <div className="d-flex align-items-center justify-content-center mb-4">
              <Title title={"About PSI World"} />
            </div>
          )}
          <Row>
            <Col className="col-xlg-6 col-lg-6">
              {!isMobile && <Title title={"About PSI World"} />}
              <p className={styles.info}>
                Experience the future of real estate with Property Shop
                Investment’s (PSI) cutting-edge platform. Explore properties
                through 360-degree virtual tours, interact with agents and users
                in real-time, and immerse yourself in full VR experiences like
                never before. Access comprehensive listings of all major UAE
                projects, all in one convenient place. Begin your personalized
                journey in the metaverse, from creating your avatar to
                seamlessly booking your dream property.
              </p>
            </Col>
            <Col className="col-xlg-6 col-lg-6">
              <img src={assets.aboutBanner} alt="banner" />
            </Col>
          </Row>
          <div className="d-flex justify-content-center align-items-center">
            <Button
              imgSrc={assets.placholder}
              altText={"placholder"}
              text={"Ask us more"}
            />
          </div>
        </div>
      </div>
      {isMobile && (
        <img
          src={assets.aboutEllipse}
          className={styles.bckEllipse}
          alt="about-ellipse"
        />
      )}
    </section>
  );
};

export default About;
