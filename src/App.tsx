import { useState } from "react";
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
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [showLoading, setShowLoading] = useState(false);
  const [showHome, setShowHome] = useState(false);

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
      <Hero />
      <WhyMetaverse />
      <About />
      <OurPlatform />
      <Journey />
      <JoinUs />
      <Footer />
    </>
  );
}

export default App;
