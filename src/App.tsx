import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Hero from "./components/hero-section/hero-section.component";
import WhyMetaverse from "./components/why-metaverse/why-metaverse.component";
import About from "./components/about/about.component";
import OurPlatform from "./components/our-platform/our-platform.component";
import Journey from "./components/journey/journey.component";
import JoinUs from "./components/join-us/join-us.component";
import Footer from "./components/footer/footer.component";
import Start from "./components/start/start.component";
import Loading from "./components/loader/loader.component";
import ChatBotModal from "./components/chat-bot/chat-bot.component";
import { useToggle } from "./context/ToggleContext";
import "bootstrap/dist/css/bootstrap.min.css";
import assets from "./assets";
import "./styles/index.scss";

function App() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const { isToggleOpen } = useToggle();
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [showHome, setShowHome] = useState<boolean>(false);
  const [showChatBot, setShowChatBot] = useState<boolean>(false);
  const [vectaryPosition, setVectaryPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY; // Get the current scroll position
      const maxBottom = 70; // Set the maximum position
      // Calculate the new bottom position
      let newBottom = position * 0.1; // Move up as you scroll down
      // Stop moving the vectary down once it reaches max
      if (newBottom > maxBottom) {
        newBottom = maxBottom; // Cap it at max
      }
      setVectaryPosition(newBottom); // Update the position
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleStart = () => {
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      setShowHome(true);
    }, 5000);
  };

  if (!showHome) {
    if (showLoading) {
      return <Loading />;
    }
    return <Start onStart={handleStart} />;
  }

  return (
    <>
      {!isMobile && (
        <img
          src={assets.vectary}
          alt="vectary"
          className={`${showChatBot ? "vectary bot_clicked" : "vectary"}`}
          style={{
            bottom: `${vectaryPosition}%`,
          }}
          onClick={() => setShowChatBot(true)}
        />
      )}
      <Hero />
      <div className={`${isMobile && isToggleOpen ? "d-none" : "unset"}`}>
        <WhyMetaverse />
        <About />
        <OurPlatform />
        <Journey />
        <JoinUs />
        <Footer />
      </div>
      <ChatBotModal
        onClose={() => setShowChatBot(false)}
        showChatBot={showChatBot}
      />
    </>
  );
}

export default App;
