import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Row, Col } from "react-bootstrap";
import Title from "../title/title.component";
import assets from "../../assets";
import styles from "./journey.module.scss";

const Journey = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [imageSrc, setImageSrc] = useState<string>(assets.lady);
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
            <img
              src={imageSrc}
              alt="lady"
              className="w-100"
              onMouseEnter={() => setImageSrc(assets.employee)}
              onMouseLeave={() => setImageSrc(assets.lady)}
            />
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
      {isMobile && (
        <>
          <img
            src={assets.mbJourneyEllipse}
            className={styles.mbJourneyEllipse}
            alt="mb-journey-ellipse"
          />
          <img
            src={assets.jREllipse}
            className={styles.mbLeftEllipse}
            alt="mb-left-ellipse"
          />
          <img
            src={assets.platformEllipse2}
            className={styles.mbBottomEllipse}
            alt="mb-bottom-ellipse"
          />
        </>
      )}
      {!isMobile && (
        <>
          <img
            src={assets.ellipse19}
            className={styles.journeyLeftEllipse}
            alt="journey-left-ellipse"
          />
          <img
            src={assets.jREllipse}
            className={styles.rightEllipse}
            alt="right-ellipse"
          />
        </>
      )}
      <img src={assets.property} className={styles.property} alt="property" />
    </section>
  );
};

export default Journey;
