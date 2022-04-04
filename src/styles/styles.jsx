import styled from "@emotion/styled";
import { createTheme, Fab, Typography } from "@mui/material";

const theme = createTheme();

export const SocialFab = styled(Fab)({
  position: "fixed",
  bottom: 20,
  color: theme.palette.primary.contrastText,
  background: theme.palette.primary.light
});

export const FooterTitle = styled(Typography)({
    color: theme.palette.primary.main
})
