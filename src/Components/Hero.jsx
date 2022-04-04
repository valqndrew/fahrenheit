import { Button, Container, Typography, Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container align="center">
        <Typography variant="h4" m={2}>
          {t("hero_title")}
        </Typography>
        <Typography variant="body">{t("hero_body")}</Typography>

        <Box m={2}>
          <Button variant="contained" sx={{ mr: 1 }}>
            {t("get_started_button")}
          </Button>
          <Button variant="outlined">{t("demo_button")}</Button>
        </Box>
      </Container>
    </>
  );
};

export default Hero;
