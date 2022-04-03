import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";
import { useTranslation } from "react-i18next";

const FooterLink = ({ link }) => {
  return <Typography variant="body2">{link}</Typography>;
};

const FooterGroup = ({ title, links }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="h6">{title}</Typography>
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
    <Container align="center">
      <Grid container spacing={2}>
        {footerGroups.map(({ title, links }, index) => (
          <FooterGroup title={title} links={links} key={index} />
        ))}
      </Grid>

      <Box>
        <Typography variant="h6">{t("subscribe_title")}</Typography>
        <Box>
          <TextField label={t("your_email")} />
          <Button variant="contained">{t("subscribe_button")}</Button>
        </Box>
      </Box>

      <Box>
        <Typography variant="h6">{t("connect_title")}</Typography>
        <Box>
          <IconButton>
            <TelegramIcon />
          </IconButton>
          <IconButton>
            <WhatsAppIcon />
          </IconButton>
        </Box>
      </Box>

      <Box>
        <Typography variant="h6">{t("footer_title")}</Typography>
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
