import { Button, Container, Typography, Box } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <>
      <Container align="center">
        <Typography variant="h6">
          The easiest way to earn interest on your crypto
        </Typography>
        <Typography variant="body">Earn up to 12.73% APY </Typography>
        <Typography variant="body">
          with a crypto interest account from Fahrenheit. Deposit your crypto
          and start earning immediately with no lock-in periods or minimum
          deposits
        </Typography>

        <Box>
          <Button variant="contained">Get Started</Button>
          <Button variant="outlined">Demo</Button>
        </Box>
      </Container>
    </>
  );
};

export default Hero;
