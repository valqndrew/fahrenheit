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
const footerGroups = [
  {
    title: "Resources",
    links: [
      "Interest Rates",
      "Withdrawal Fees",
      "Blog",
      "Referral Program",
      "Fahrenheit Interest Account",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Our Team", "Careers", "Media Center"],
  },
  {
    title: "Help",
    links: ["FAQ", "Contact Us", "Sign Up", "Demo", "Feedback Portal"],
  },
];

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
  return (
    <Container align="center">
      <Grid container spacing={2}>
        {footerGroups.map(({ title, links }, index) => (
          <FooterGroup title={title} links={links} />
        ))}
      </Grid>

      <Box>
        <Typography variant="h6">Subscribe for updates</Typography>
        <Box>
          <TextField label="Your email" />
          <Button variant="contained">Subscribe</Button>
        </Box>
      </Box>

      <Box>
        <Typography variant="h6">Connect with us</Typography>
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
        <Typography variant="h6">We are recognized & certified</Typography>
        <Box>
          <Button>Terms & Condition</Button>
          <Button>Privacy Policy</Button>
        </Box>
        <Typography variant="caption">
          Hodlnaut Pte. Ltd. (the Company) has attained an in-principle approval
          from the Monetary Authority of Singapore (MAS) for the grant of a
          Major Payment Institution license under the Payment Services Act 2019
          for the provision of DPT services. The Monetary Authority of Singapore
          (MAS) requires us to provide this risk warning to you as a customer of
          a Digital Payment Token (DPT) service provider. Before you pay your
          DPT service provider any money or DPT, you should be aware of the
          following. 1. Please note that you may not be able to recover all the
          DPTs you paid to your DPT service provider if the Company's business
          fails. 2. You should not transact in the DPT if you are not familiar
          with this DPT. This includes how the DPT is created, and how the DPT
          you intend to transact is transferred or held by your DPT service
          provider. 3. You should be aware that the value of DPTs may fluctuate
          greatly. You should transact DPTs only if you are prepared to accept
          the risk of losing all of the money you put into such tokens. 4. You
          should be aware that your DPT service provider, as part of its licence
          to provide DPT services, may offer services related to DPTs which are
          promoted as having a stable value, commonly known as "stablecoins".
          Kindly note that the DPT borrowing and lending services provided by
          the Company are not regulated by the MAS under the Payment Services
          Act 2019. Copyright © 2022 Hodlnaut. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
