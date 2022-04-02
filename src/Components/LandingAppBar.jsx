import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = ["Integrate", "Secure", "Authenticate", "Lock", "USE"];

const LandingAppBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
              <Typography variant="h6">Fahrenheit</Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Typography variant="h6">Fahrenheit</Typography>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={toggleMenu}
                  sx={{ my: 2, display: "block" }}
                  color="secondary"
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {menuOpen ? (
        <Box
          sx={{ display: "flex", flexDirection: "column" }}
          justifyContent="center"
          alignItems="center"
        >
          {pages.map((page) => (
            <Button  variant="outlined" sx={{ width: "100%" }}>
              {page}
            </Button>
          ))}
        </Box>
      ) : null}
    </>
  );
};
export default LandingAppBar;
