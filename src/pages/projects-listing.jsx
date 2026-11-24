import * as React from "react";
import { Grid, Typography } from "@mui/material";
import GalleryItem from "../components/gallery-item";
import projects from "../data/projects";

function ProjectsListing() {
  return (
    <div className="container-wrapper">
      <Typography align="center" variant="h4" color="text.primary" gutterBottom>
        Projects Completed
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {projects.map((project) => (
          <GalleryItem key={project.id} project={project} />
        ))}
      </Grid>
    </div>
  );
}

export default ProjectsListing;
