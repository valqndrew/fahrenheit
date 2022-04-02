import LandingAppBar from "./Components/LandingAppBar";
import Hero from "./Components/Hero";
import Cryptos from "./Components/Cryptos";
import Benefits from "./Components/Benefits";
import Achievements from "./Components/Achievements";
import Footer from "./Components/Footer";

import "./styles/styles.css";

function App() {
  return (
    <>
      <LandingAppBar />
      <Hero />
      <Cryptos />
      <Benefits />
      <Achievements />
      <Footer />
    </>
  );
}

export default App;
