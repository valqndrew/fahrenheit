import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { PrimaryColorContainer } from "../styles/styles";

const AchievementItem = ({ head, title }) => {
  return (
    <Grid item xs={12} mb={2}>
      <Paper sx={{ p: 2 }} align="center">
        <Typography variant="h3" color="primary">
          {head}
        </Typography>
        <Typography gutterBottom variant="body1">
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
    <PrimaryColorContainer>
      <Grid container spacing={1}>
        {achievements.map(({ head, title }, index) => (
          <AchievementItem head={head} title={title} key={index} />
        ))}
      </Grid>
    </PrimaryColorContainer>
  );
};

export default Achievements;
