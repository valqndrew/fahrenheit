import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";



const BenefitItem = ({ benefit }) => {
  return (
    <Grid item xs={12} md={6}>
      {benefit}
    </Grid>
  );
};

const Benefits = () => {
  const { t } = useTranslation();
  const benefits = [
    { benefit: t("benefit1") },
    { benefit: t("benefit2") },
    { benefit: t("benefit3") },
    { benefit: t("benefit4") },
  ];
  return (
    <Container>
      <Typography variant="h6">{t("benefits_title")}</Typography>
      <Typography variant="body1">{t("benefits_body1")}</Typography>
      <Typography variant="body1">{t("benefits_body2")}</Typography>
      <Grid container spacing={2}>
        {benefits.map(({ benefit }, index) => (
          <BenefitItem benefit={benefit} key={index} />
        ))}
      </Grid>
    </Container>
  );
};

export default Benefits;
