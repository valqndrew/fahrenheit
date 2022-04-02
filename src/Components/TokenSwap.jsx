import { Button, Container, Typography } from "@mui/material";
import React from "react";

const steps = [
  "Log in to your Fahrenheit account",
  "Choose the token you would like to trade",
  "Review the quote",
  "Place your order",
];

const Step = ({ value }) => {
  return (
    <li>
      <Typography>{value}</Typography>
    </li>
  );
};

const TokenSwap = () => {
  return (
    <Container>
      <Typography variant="h6">Token Swap</Typography>
      <Typography variant="p">
        Execute trades instantly between any of the supported assests at
        Fahrenheit. Manage your portfolio and rebalance asset holdings without
        ever leaving Fahrenheit platform
      </Typography>
      <ol>
        {steps.map((value, index) => (
          <Step value={value} key={index} />
        ))}
      </ol>

      <Button variant="contained">Sign Up</Button>
    </Container>
  );
};

export default TokenSwap;
