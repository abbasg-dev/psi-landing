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
      <div className="container px-md-0 px-0 mt-3">
        <div className="row">
          <Col
            lg={4}
            md={12}
            className="align-content-center px-lg-5 px-md-5 px-5"
          >
            <img src={assets.lady} alt="lady" />
          </Col>
          <Col lg={8} md={12} className="px-lg-5 px-md-0 px-0">
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
                  <Row className="col-xlg-5 col-lg-5 col-md-12 px-lg-0 px-md-3 px-3">
                    <p>{item?.description}</p>
                  </Row>
                </div>
              );
            })}
          </Col>
        </div>
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
