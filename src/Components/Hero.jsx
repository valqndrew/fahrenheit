import { Button, Container, Typography, Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container align="center">
        <Typography variant="h6">{t("hero_title")}</Typography>
        <Typography variant="body">
          {t("hero_body")}
        </Typography>

        <Box>
          <Button variant="contained">{t("get_started_button")}</Button>
          <Button variant="outlined">{t("demo_button")}</Button>
        </Box>
      </Container>
    </>
  );
};

export default Hero;
