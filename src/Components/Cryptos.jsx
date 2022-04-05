import { Avatar, Button, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import BTC from "../img/cryptos/BTC.svg";
import BCH from "../img/cryptos/BCH.svg";
import ETH from "../img/cryptos/ETH.svg";
import BNB from "../img/cryptos/BNB.svg";
import USDT from "../img/cryptos/USDT.svg";
import XLM from "../img/cryptos/XLM.svg";

const cryptos = [
  { name: "BTC", logo: BTC },
  { name: "BCH", logo: BCH },
  { name: "ETH", logo: ETH },
  { name: "BNB", logo: BNB },
  { name: "USDT", logo: USDT },
  { name: "XLM", logo: XLM },
];

const CryptoItem = ({ name, logo }) => {
  return (
    <Grid item xs={6}>
      <Avatar src={logo} />
      {name}
    </Grid>
  );
};

const Cryptos = () => {
  const { t } = useTranslation();
  return (
    <Container align="center">
      <Typography variant="h5" color="primary" gutterBottom>
        {t("cryptos_title")}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {t("cryptos_subtitle")}
      </Typography>
      <Grid container spacing={2} mt mb>
        {cryptos.map(({ name, logo }, index) => (
          <CryptoItem name={name} logo={logo} key={index} />
        ))}
      </Grid>
      <Button
        variant="contained"
        sx={{
          m: 4,
        }}
        component={Link}
        href="https://t.me/Fahrenheitsupport"
      >
        {t("our_rates_button")}
      </Button>
    </Container>
  );
};

export default Cryptos;
