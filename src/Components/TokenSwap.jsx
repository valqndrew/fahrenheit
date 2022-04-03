import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";


const Step = ({ value }) => {
  return (
    <li>
      <Typography>{value}</Typography>
    </li>
  );
};

const TokenSwap = () => {
  const {t} = useTranslation()

  const steps = [
    t("step1"),
    t("step2"),
    t("step3"),
    t("step4"),
  ];
  
  return (
    <Container>
      <Typography variant="h6">{t("token_swap_title")}</Typography>
      <Typography variant="p">
        {t("token_swap_paragraph")}
      </Typography>
      <ol>
        {steps.map((value, index) => (
          <Step value={value} key={index} />
        ))}
      </ol>

      <Button variant="contained">{t("sign_up_button")}</Button>
    </Container>
  );
};

export default TokenSwap;
