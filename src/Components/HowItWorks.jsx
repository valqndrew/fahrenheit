import React from "react";
import {
 
  Box,
  Button,
  Container,
  Link,
  Typography,
} from "@mui/material";
import PaperPlane from "../img/lottie/paper-plane.json";
import Arrow from "../img/lottie/arrow.json";
import PieChart from "../img/lottie/pie-chart.json";
import Wallet from "../img/lottie/wallet.json";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";

const WorkItem = ({ icon, body, title }) => {
  return (
    <Box>
      <Lottie
        animationData={icon}
        autoplay
        loop
        style={{ height: 100, width: 100 }}
      />

      <Typography color="primary" variant="h5">
        {title}
      </Typography>
      <Typography variant="body1">{body}</Typography>
      <Box>
        <Lottie animationData={Arrow} autoplay loop style={{ height: 100 }} />
      </Box>
    </Box>
  );
};

const HowItWorks = () => {
  const { t } = useTranslation();
  const works = [
    {
      icon: PaperPlane,
      title: t("deposit_title"),
      body: t("deposit_body"),
    },
    {
      icon: PieChart,
      title: t("compound_title"),
      body: t("compound_body"),
    },
    {
      icon: Wallet,
      title: t("receive_payouts_title"),
      body: t("receive_payouts_body"),
    },
  ];

  return (
    <Container>
      <Typography mt={3} variant="h4" align="center">
        {t("how_it_works_title")}
      </Typography>
      {works.map(({ icon, title, body }, index) => (
        <WorkItem icon={icon} title={title} body={body} key={index} />
      ))}
      <Button
        variant="contained"
        component={Link}
        href="https://t.me/FahrenheitCryptoInvestmentsBot"
      >
        {t("get_started_button")}
      </Button>
    </Container>
  );
};

export default HowItWorks;
