import * as React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

function GalleryItem({ project }) {
  return (
    <Grid item xs={12} sm={12} md={4} style={{ display: "flex" }}>
      <Card sx={{ width: "100%" }}>
        <CardMedia
          component="img"
          height="260"
          image={project.image}
          alt={`Completed ${project.category.toLowerCase()} project`}
        />
        <CardContent>
          <Typography variant="h6" align="center">
            {project.category}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default GalleryItem;
