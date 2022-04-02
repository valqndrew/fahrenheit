import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

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
  return (
    <Container align="center">
      <Typography variant="h6">Earn up to 12.73% APY!</Typography>
      <Typography variant="subtitle1">
        Start earning interests on any amount of crypto in the 6 assests we
        support and get paid every Monday just by Fahrenheit
      </Typography>
      <Grid container spacing={2}>
        {cryptos.map(({ name }, index) => (
          <CryptoItem name={name} key={index} />
        ))}
      </Grid>
      <Button variant="contained">Our Rates</Button>
    </Container>
  );
};

export default Cryptos;
