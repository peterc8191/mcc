import * as React from "react";
import { Grid, Typography } from "@mui/material";
import PortfolioItem from "./portfolio-item";
import home from "../images/homeImg.jpeg";
import commercial from "../images/commecial.jpg";
import appartment from "../images/appartment.jpg";

function Portfolio() {
  return (
    <div className="container-wrapper">
      <Typography align="center" variant="h4" color="text.primary">
        Projects
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        <PortfolioItem img={home} title={"Residential housing"} />
        <PortfolioItem img={commercial} title={"Commercial housing"} />
        <PortfolioItem img={appartment} title={"Industrial projects"} />
      </Grid>
    </div>
  );
}

export default Portfolio;
