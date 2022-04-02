import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "../styles/styles.css";
import { Box, Fab } from "@mui/material";
import styled from "@emotion/styled";

const SocialFab = styled(Fab)({
  position: "fixed",
  bottom: 20
});
const SocialMedia = () => {
  return (
    <>
      <SocialFab sx={{left:20}}>
        <WhatsAppIcon />
      </SocialFab>
      <SocialFab sx={{
        right: 20
      }}>
        <TelegramIcon />
      </SocialFab>
    </>
  );
};

export default SocialMedia;
