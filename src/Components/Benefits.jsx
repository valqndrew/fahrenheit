import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const benefits = [
  { benefit: "Weekly payouts to your wallet" },
  { benefit: "Deposit and withdraw anytime" },
  { benefit: "No lock-in periods or minimum deposits" },
  { benefit: "Optional Nexus Mutual's Custody CoverI" },
];

const BenefitItem = ({ benefit }) => {
  return (
    <Grid item xs={12} md={6}>
      {benefit}
    </Grid>
  );
};

const Benefits = () => {
  return (
    <Container>
      <Typography variant="h6">
        Fahrenheit's leading APY rates and custody cover puts your crypto to
        work for you
      </Typography>
      <Typography variant="body1">
        We've created market leading conditions to ensure your crypto not only
        grows, but is safe in storage and transit.
      </Typography>
      <Typography variant="body1">
        Explore how crypto interest accounts can benefit your stack with our
        extensive resources
      </Typography>
      <Grid container spacing={2}>
        {benefits.map(({ benefit }, index) => (
          <BenefitItem benefit={benefit} />
        ))}
      </Grid>
    </Container>
  );
};

export default Benefits;
