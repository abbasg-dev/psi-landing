import { useState } from "react";
import { Row } from "react-bootstrap";
import Title from "../title/title.component";
import ChatBotModal from "../chat-bot/chat-bot.component";
import assets from "../../assets";
import styles from "./why-metaverse.module.scss";
const WhyMetaverse = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [showChatBot, setShowChatBot] = useState<boolean>(false);
  const content = [
    {
      title: "Save Time",
      icon_one: assets.clock,
      icon_two: assets.percentageLayer,
      background: assets.rectangle1,
      description:
        "Discover properties instantly without the need for travel or scheduling multiple visits. With PSI's immersive platform, browse and explore hundreds of properties in the metaverse at your convenience. Take 360-degree virtual tours and connect with agents in real-time, all from the comfort of your home. Streamline your real estate journey and make decisions faster than ever.",
      color: "#E56B9DCC",
    },
    {
      title: "Save Money",
      icon_one: assets.card,
      icon_two: assets.moneyLayer,
      background: assets.rectangle2,
      description:
        "Eliminate the costs of traveling, commuting, and unnecessary expenses while searching for properties. PSI's metaverse platform brings the entire real estate market to you, saving you valuable resources. Access comprehensive listings, interact with agents, and finalize your deals—all without leaving your home or spending extra.",
      color: "#13DCF7CC",
    },
    {
      title: "Comare Units",
      icon_one: assets.home,
      icon_two: assets.homeLayer,
      background: assets.rectangle3,
      description:
        "Easily compare multiple properties side by side in a visually immersive environment. Explore layouts, amenities, and prices in real-time, helping you make informed decisions with confidence. PSI's platform simplifies the comparison process, allowing you to focus on finding the perfect unit that fits your needs and preferences.",
      color: "#A84BE3CC",
    },
    {
      title: "Enjoy Your Experience",
      icon_one: assets.agree,
      icon_two: assets.agreeLayer,
      background: assets.rectangle4,
      description:
        "Turn the property search into an engaging and enjoyable adventure. Create your personalized avatar and dive into a fully immersive VR experience. Interact with agents, explore virtual neighborhoods, and envision your future home like never before. With PSI's cutting-edge technology, finding your dream property is no longer a chore—it’s an exciting journey in the metaverse!",
      color: "#1D25D3CC",
    },
  ];
  return (
    <>
      <section className={styles.whyWrapper}>
        <div className={styles.whyHeader}>
          <img
            src={assets.coronaLeft}
            className={styles.coronaLeft}
            alt="corona-left"
          />
          <img
            src={assets.vectary}
            alt="vectary"
            className={styles.vectary}
            onClick={() => setShowChatBot(true)}
          />
          <div className={styles.whyQ}>
            <Title title="Why Choose PSI’s Metaverse Platform?" />
          </div>
        </div>
        <div className="container">
          <p className={styles.whyDescription}>
            Step into the future of real estate with Property Shop Investment’s
            innovative metaverse platform. Designed to revolutionize the
            property-buying experience, PSI’s platform offers a seamless blend
            of advanced technology and convenience.
          </p>
          <Row className="mt-5">
            {content?.map((item, index) => {
              const isHovered = hoverIndex === index;
              return (
                <div
                  key={index}
                  className={styles.cube}
                  style={{
                    backgroundImage: isHovered
                      ? `url(${item.background})`
                      : `linear-gradient(${item.color} 100%, #00000033 20%), url(${item.background})`,
                  }}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <div className={styles.shownContent}>
                    <div className={styles.title}>{item?.title}</div>
                    <img src={item?.icon_one} alt="icon" />
                  </div>
                  <div className={styles.hiddenContent}>
                    <img
                      src={item?.icon_two}
                      alt="icon-2"
                      className={styles.hiddenIcon}
                    />
                    <p className={styles.hiddenDescription}>
                      {item?.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </Row>
        </div>
        <img
          src={assets.ellipseLeft}
          className={styles.ellipseLeftImg}
          alt="new-left-image"
        />
        <img
          src={assets.coronaRight}
          className={styles.coronaRightImg}
          alt="new-right-image1"
        />
        <img
          src={assets.ellipse}
          className={styles.ellipseRightImg}
          alt="new-right-image2"
        />
      </section>
      <ChatBotModal
        onClose={() => setShowChatBot(false)}
        showChatBot={showChatBot}
      />
    </>
  );
};

export default WhyMetaverse;
