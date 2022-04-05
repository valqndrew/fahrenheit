import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Step = ({ value, index }) => {
  return (
    <ListItem sx={{ display: "flex" }}>
      <Typography mr color="primary">
        {index}
      </Typography>
      <Typography>{value}</Typography>
    </ListItem>
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
      <Box mb={1}>
        <Typography gutterBottom variant="h4" color="primary">
          {t("token_swap_title")}
        </Typography>
        <Typography gutterBottom variant="p">
          {t("token_swap_paragraph")}
        </Typography>
      </Box>
      <List>
        {steps.map((value, index) => (
          <Step value={value} key={index} index={index} />
        ))}
      </List>

      <Button
        variant="contained"
        sx={{
          mt: 2,
        }}
        component={Link}
        href="https://t.me/Fahrenheitsupport"
      >
        {t("sign_up_button")}
      </Button>
    </Container>
  );
};

export default TokenSwap;
