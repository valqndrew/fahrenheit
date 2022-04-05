import { Button, Container, Typography, Box, Link } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container align="center">
        <Typography variant="h3" color="primary" m={2}>
          {t("hero_title")}
        </Typography>
        <Typography variant="body">{t("hero_body")}</Typography>

        <Box m={2}>
          <Button
            component={Link}
            href="https://t.me/Fahrenheitsupport"
            variant="contained"
            sx={{ mr: 1 }}
          >
            {t("get_started_button")}
          </Button>
          <Button
            component={Link}
            href="https://t.me/Fahrenheitsupport"
            variant="outlined"
          >
            {t("demo_button")}
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Hero;
