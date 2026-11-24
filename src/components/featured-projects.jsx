import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, Box, Button } from "@mui/material";
import GalleryItem from "./gallery-item";
import projects from "../data/projects";

function FeaturedProjects() {
  return (
    <Box component="section" sx={{ backgroundColor: "background.paper" }}>
      <div className="container-wrapper">
        <Typography align="center" variant="h4" color="text.primary" gutterBottom>
          Projects Completed
        </Typography>
        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
          {projects.map((project) => (
            <GalleryItem key={project.id} project={project} />
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button component={RouterLink} to="/projects" variant="contained">
            View All Projects
          </Button>
        </Box>
      </div>
    </Box>
  );
}

export default FeaturedProjects;
