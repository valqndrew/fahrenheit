import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "../styles/styles.css";
import { Box, Fab } from "@mui/material";
const SocialMedia = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Fab>
        <WhatsAppIcon />
      </Fab>
      <Fab>
        <TelegramIcon />
      </Fab>
    </Box>
  );
};

export default SocialMedia;
