import { Button, Container, Typography, Box, Link } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import TypeAnimation from "react-type-animation";
import Lottie from "lottie-react";
import Rocket from "../img/lottie/rocket.json";
import "../styles/styles.css";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container align="center">
        <Box>
          <Typography variant="h2" m={2}>
            {t("hero_title")}
          </Typography>
          <TypeAnimation
            cursor={false}
            sequence={[
              "Bitcoin",
              2000,
              "",
              2000,
              "Ethereum",
              2000,
              "",
              2000,
              "Bitcoin Cash",
              2000,
              "",
              2000,
              "Tether",
              2000,
              "",
              2000,
              "STELLAR",
              2000,
              "",
            ]}
            wrapper="div"
            className="crypto-text"
            repeat={Infinity}
          />
        </Box>
        <Typography variant="body">{t("hero_body")}</Typography>

        <Box>
          <Lottie animationData={Rocket} loop autoplay />
        </Box>

        <Box m={2}>
          <Button
            component={Link}
            href="https://t.me/FahrenheitCryptoInvestmentsBot"
            variant="contained"
            sx={{ mr: 1 }}
          >
            {t("get_started_button")}
          </Button>
          <Button
            component={Link}
            href="https://t.me/FahrenheitCryptoInvestmentsBot"
            variant="outlined"
          >
            {t("demo_button")}
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Hero;
