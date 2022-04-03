import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const cryptos = [
  { name: "BTC" },
  { name: "DAI" },
  { name: "ETH" },
  { name: "USDC" },
  { name: "USDT" },
  { name: "WBTC" },
];

const CryptoItem = ({ name }) => {
  return (
    <Grid item xs={6}>
      {name}
    </Grid>
  );
};

const Cryptos = () => {
  const { t } = useTranslation();
  return (
    <Container align="center">
      <Typography variant="h6">{t("cryptos_title")}</Typography>
      <Typography variant="subtitle1">
        {t("cryptos_subtitle")}
      </Typography>
      <Grid container spacing={2}>
        {cryptos.map(({ name }, index) => (
          <CryptoItem name={name} key={index} />
        ))}
      </Grid>
      <Button variant="contained">{t("our_rates_button")}</Button>
    </Container>
  );
};

export default Cryptos;
