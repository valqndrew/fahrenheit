import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const AchievementItem = ({ head, title }) => {
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2 }}>
        <Typography align="center" variant="h3">
          {head}
        </Typography>
        <Typography align="center" variant="body1">
          {title}
        </Typography>
      </Paper>
    </Grid>
  );
};

const Achievements = () => {
  const { t } = useTranslation();
  const achievements = [
    {
      head: "$500m",
      title: t("in_held_assets"),
    },
    {
      head: "10000+",
      title: t("users"),
    },
    {
      head: 6,
      title: t("supported_assets"),
    },
  ];

  return (
    <Container>
      <Grid container spacing={2}>
        {achievements.map(({ head, title }, index) => (
          <AchievementItem head={head} title={title} key={index} />
        ))}
      </Grid>
    </Container>
  );
};

export default Achievements;
