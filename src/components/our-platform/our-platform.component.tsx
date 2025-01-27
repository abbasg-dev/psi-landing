import { useMediaQuery } from "react-responsive";
import { Row, Col } from "react-bootstrap";
import Title from "../title/title.component";
import styles from "./our-platform.module.scss";
import assets from "../../assets";

const OurPlatform = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const reasons = [
    {
      title: "Immersive Virtual Tours",
      description:
        "Explore properties with a 360-degree view using your chosen character",
      icon: assets.tours,
    },
    {
      title: "Real-Time Interaction",
      description:
        "Interact with other users and get real-time assistance from agents",
      icon: assets.interaction,
    },
    {
      title: "VR Integration",
      description:
        "Experience properties like never before with full VR support.",
      icon: assets.vr,
    },
    {
      title: "Comprehensive Listings",
      description:
        "Access all major real estate projects across the UAE in one place.",
      icon: assets.key,
    },
  ];
  return (
    <section className={styles.platform} id="features">
      <div className="d-flex justify-content-center align-items-center mb-4">
        <Title title="Why Choose Our Platform?" />
      </div>
      <div className="container">
        <Row>
          {reasons?.map((item, index) => {
            return (
              <Col
                lg={6}
                md={12}
                className={"px-lg-3 px-md-3 px-0 py-md-2 py-2"}
                key={index}
              >
                <div className={`d-flex ${styles.item}`}>
                  <div className="d-block">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <img src={item.icon} alt="" className={styles.itemIcon} />
                  <img
                    src={assets.ellipse1}
                    alt="ellipse"
                    className={styles.ellipse1}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      {!isMobile && (
        <>
          <img
            src={assets.ellipse15}
            className={styles.platformEllipse1}
            alt="new-left-ellipse1"
          />
          <img
            src={assets.ellipse23}
            className={styles.platformEllipse3}
            alt="right-ellipse1"
          />
        </>
      )}
      {isMobile && (
        <img
          src={assets.platformEllipse2}
          className={styles.platformMobEllipse}
          alt="platform-mob-ellipse"
        />
      )}
      <img
        src={isMobile ? assets.platformEllipse1 : assets.ellipse16}
        className={styles.platformEllipse2}
        alt="new-left-ellipse2"
      />
      <img
        src={assets.ellipse8}
        className={styles.aboutEllipse}
        alt="new-left-image"
      />
    </section>
  );
};

export default OurPlatform;
