import LandingAppBar from "./Components/LandingAppBar";
import Hero from "./Components/Hero";
import Cryptos from "./Components/Cryptos";
import Benefits from "./Components/Benefits";
import Achievements from "./Components/Achievements";
import Footer from "./Components/Footer";
import "./styles/styles.css";
import SocialMedia from "./Components/SocialMedia";
import TokenSwap from "./Components/TokenSwap";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("welcome_to_react")}</h2>
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
