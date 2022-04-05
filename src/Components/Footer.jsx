import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";
import { useTranslation } from "react-i18next";
import { FooterTitle } from "../styles/styles";

const FooterLink = ({ link }) => {
  return (
    <Typography variant="body2" gutterButtom>
      {link}
    </Typography>
  );
};

const FooterGroup = ({ title, links }) => {
  return (
    <Grid item xs={12}>
      <FooterTitle variant="h6">{title}</FooterTitle>
      {links.map((link, index) => (
        <FooterLink link={link} key={index} />
      ))}
    </Grid>
  );
};
const Footer = () => {
  const { t } = useTranslation();

  const footerGroups = [
    {
      title: t("resources"),
      links: [
        t("interest_rates"),
        t("withdrawal_fees"),
        t("blog"),
        t("referral_program"),
        t("fahrenheit_interest_account"),
      ],
    },
    {
      title: t("company"),
      links: [t("about_us"), t("our_team"), t("careers"), t("media_center")],
    },
    {
      title: t("help"),
      links: [
        t("faq"),
        t("contact_us"),
        t("sign_up"),
        t("demo"),
        t("feedback_portal"),
      ],
    },
  ];

  return (
    <Container align="center" sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        {footerGroups.map(({ title, links }, index) => (
          <FooterGroup title={title} links={links} key={index} />
        ))}
      </Grid>

      <Box mt={2}>
        <FooterTitle variant="h6">{t("subscribe_title")}</FooterTitle>
        <Box mt={2} display="flex" justifyContent={"center"}>
          <TextField
            label={t("your_email")}
            sx={{
              mr: 1,
            }}
          />
          <Button variant="contained">{t("subscribe_button")}</Button>
        </Box>
      </Box>

      <Box mt={2}>
        <FooterTitle variant="h6">{t("connect_title")}</FooterTitle>
        <Box>
          <IconButton component={Link} href="https://t.me/Fahrenheitsupport">
            <TelegramIcon color="primary"/>
          </IconButton>
          <IconButton>
            <WhatsAppIcon color="success"/>
          </IconButton>
        </Box>
      </Box>

      <Box mt={2}>
        <FooterTitle variant="h6">{t("footer_title")}</FooterTitle>
        <Box>
          <Button>{t("t_c_button")}</Button>
          <Button>{t("privacy_text")}</Button>
        </Box>
        <Typography variant="caption">{t("footer_caption")}</Typography>

        <Typography variant="caption">{t("copyright_text")}</Typography>
      </Box>
    </Container>
  );
};

export default Footer;
