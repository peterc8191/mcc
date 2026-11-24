import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

function NotFound() {
  return (
    <div className="container-wrapper">
      <Typography variant="h4" align="center" gutterBottom>
        Page not found
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button component={RouterLink} to="/" variant="contained">
          Back to Home
        </Button>
      </Box>
    </div>
  );
}

export default NotFound;
