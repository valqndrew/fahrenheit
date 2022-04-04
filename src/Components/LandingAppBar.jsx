import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { InputAdornment, MenuItem, Grid, TextField } from "@mui/material";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Logo from "../img/logo.svg";
import "../styles/styles.css";

const pages = ["Integrate", "Secure", "Authenticate", "Lock", "USE"];

const langs = [
  {
    value: "",
    label: "",
  },
  {
    value: "en",
    label: "en",
  },
  {
    value: "de",
    label: "de",
  },
];

const LandingAppBar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [lang, setLang] = React.useState("de");

  const handleLangChange = (e) => {
    setLang(e.target.value);
    i18next.changeLanguage(e.target.value);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "white",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid container justifyContent="space-between">
              <Grid item xs={6}>
                <img src={Logo} className="logo" />
              </Grid>
              <Grid item xs={6}>
                <Box display="flex" justifyContent="flex-end">
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LanguageOutlinedIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                    select
                    value={lang}
                    onChange={handleLangChange}
                  >
                    {langs.map(({ value, label }) => (
                      <MenuItem key={value} value={value}>
                        {label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </Grid>
            </Grid>

            {/* Desktop */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={toggleMenu}
                  sx={{ my: 2, display: "block" }}
                  color="primary"
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
            <Button variant="outlined" sx={{ width: "100%" }}>
              {page}
            </Button>
          ))}
        </Box>
      ) : null}
    </>
  );
};
export default LandingAppBar;
