import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Step = ({ value }) => {
  return (
    <Box>
      <Typography>{value}</Typography>
    </Box>
  );
};

const TokenSwap = () => {
  const { t } = useTranslation();

  const steps = [t("step1"), t("step2"), t("step3"), t("step4")];

  return (
    <Container
      sx={{
        mt: 2,
      }}
    >
      <Typography gutterBottom variant="h6">
        {t("token_swap_title")}
      </Typography>
      <Typography gutterBottom variant="p">
        {t("token_swap_paragraph")}
      </Typography>

      {steps.map((value, index) => (
        <Step value={value} key={index} />
      ))}

      <Button
        variant="contained"
        sx={{
          mt: 2,
        }}
      >
        {t("sign_up_button")}
      </Button>
    </Container>
  );
};

export default TokenSwap;
