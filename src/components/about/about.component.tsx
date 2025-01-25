import { Row, Col } from "react-bootstrap";
import Title from "../title/title.component";
import Button from "../button/button.component";
import assets from "../../assets";
import styles from "./about.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.aboutWrapper}>
          <Row>
            <Col className="col-xlg-6 col-lg-6">
              <Title title={"About PSI World"} />
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
            <Col className="col-xlg-6 col-lg-6 position-relative">
              <div
                style={{ backgroundImage: `url(${assets.visionProOne})` }}
                className={styles.card1}
              ></div>
              <div
                style={{ backgroundImage: `url(${assets.visionProTwo})` }}
                className={styles.card2}
              ></div>
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
    </section>
  );
};

export default About;
