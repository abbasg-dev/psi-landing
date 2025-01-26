import { Row, Col } from "react-bootstrap";
import Title from "../title/title.component";
import assets from "../../assets";
import styles from "./journey.module.scss";

const Journey = () => {
  const steps = [
    {
      description: "Create Your Character: Personalize your virtual avatar",
      img: assets.one,
    },
    {
      description:
        "Explore Properties: Walk through properties, explore communities.",
      img: assets.two,
    },
    {
      description: "Virtual Tours: Experience properties in VR.",
      img: assets.three,
    },
    {
      description: "Book A Units.",
      img: assets.four,
    },
  ];
  return (
    <section className={styles.journey} id="how-it-works">
      <div className="d-flex justify-content-center align-items-center">
        <Title title={"Your Journey in the Metaverse: Step by Step"} />
      </div>
      <div className="container">
        <Row>
          <Col className="col-xlg-4 col-lg-4">
            <div className="position-relative">
              <div className={styles.card1}></div>
              <div className={styles.card2}></div>
            </div>
          </Col>
          <Col className="col-xlg-8 col-lg-8">
            {steps?.map((item, index) => {
              return (
                <div className={styles.stepItem} key={index}>
                  <div className={styles.imageWrapperContainer}>
                    <div className={styles.imageWrapper}>
                      <img src={assets.ellipse17} alt="ellipse" />
                      <img
                        src={item?.img}
                        alt="num"
                        className={styles.numImage}
                      />
                    </div>
                    {index !== steps.length - 1 && (
                      <div className={styles.dashedLine}></div>
                    )}
                  </div>
                  <Row className="col-xlg-5 col-lg-5">
                    <p>{item?.description}</p>
                  </Row>
                </div>
              );
            })}
          </Col>
        </Row>
      </div>
      <img
        src={assets.ellipse19}
        className={styles.journeyLeftEllipse}
        alt="journey-left-ellipse"
      />
      <img src={assets.property} className={styles.property} alt="property" />
      <img
        src={assets.jREllipse}
        className={styles.journeyRightEllipse}
        alt="journey-right-ellipse"
      />
    </section>
  );
};

export default Journey;
