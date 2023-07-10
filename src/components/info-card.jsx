import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

function InfoCard({ children, title, description }) {
  return (
    <Grid item xs={12} sm={12} md={6} lg={3} style={{ display: "flex" }}>
      <Card className={"info-card"}>
        {children}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default InfoCard;
