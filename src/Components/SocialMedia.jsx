import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "../styles/styles.css";
import { Box, Fab, Link } from "@mui/material";
import { SocialFab } from "../styles/styles";

const SocialMedia = () => {
  return (
    <>
      <SocialFab sx={{ left: 20 }}>
        <WhatsAppIcon />
      </SocialFab>
      <SocialFab
        sx={{
          right: 20,
        }}
        component={Link}
        href="https://t.me/Fahrenheitsupport"
      >
        <TelegramIcon />
      </SocialFab>
    </>
  );
};

export default SocialMedia;
