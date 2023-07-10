import * as React from "react";
import { Grid } from "@mui/material";

function PortfolioItem({ img, title }) {
  return (
    <Grid item xs={12} sm={12} md={6} lg={4} style={{ display: "flex" }}>
      <div classNAme="portfolio-container">
        <img src={img} alt="Avatar" className="portfolio-image" />
        <div className="portfolio-overlay">
          <div className="portfolio-text">{title}</div>
        </div>
      </div>
    </Grid>
  );
}

export default PortfolioItem;
