import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const achievements = [
  {
    head: "$500m",
    title: "In Held Assets",
  },
  {
    head: "10000+",
    title: "Users",
  },
  {
    head: 6,
    title: "Supported Assets",
  },
];

const AchievementItem = ({ head, title }) => {
  return (
    <Grid item xs={12} >
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
  return (
    <Container>
      <Grid container spacing={2}>
        {achievements.map(({ head, title }) => (
          <AchievementItem head={head} title={title} />
        ))}
      </Grid>
    </Container>
  );
};

export default Achievements;
