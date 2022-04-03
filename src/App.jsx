import LandingAppBar from "./Components/LandingAppBar";
import Hero from "./Components/Hero";
import Cryptos from "./Components/Cryptos";
import Benefits from "./Components/Benefits";
import Achievements from "./Components/Achievements";
import Footer from "./Components/Footer";
import "./styles/styles.css";
import SocialMedia from "./Components/SocialMedia";
import TokenSwap from "./Components/TokenSwap";

function App() {
  return (
    <>
      <SocialMedia />
      <LandingAppBar />
      <Hero />
      <Cryptos />
      <Benefits />
      <Achievements />
      <TokenSwap />
      <Footer />
    </>
  );
}

export default App;
