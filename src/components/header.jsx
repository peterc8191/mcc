import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Button, Stack } from "@mui/material";

function Header() {
  return (
    <Box
      className="hero-image"
      sx={{
        display: "flex",
        alignItems: "center",
        minHeight: { xs: "70vh", md: "85vh" },
        overflow: "hidden",
      }}
    >
      <div className="hero-motion-graphic" aria-hidden="true">
        <span className="hero-glow hero-glow-one" />
        <span className="hero-glow hero-glow-two" />
      </div>
      <div className="container-wrapper" style={{ width: "100%", position: "relative", zIndex: 1 }}>
        <Box sx={{ maxWidth: 700 }}>
          <Typography
            className="hero-text"
            variant="overline"
            sx={{ letterSpacing: 2, opacity: 0.85, display: "block", mb: 1 }}
          >
            Michael Connolly Contracts
          </Typography>
          <Typography
            className="hero-text"
            variant="h2"
            component="h1"
            sx={{ fontWeight: 700, mb: 2, fontSize: { xs: "2rem", sm: "2.75rem", md: "3.5rem" } }}
          >
            Building Excellence, Project After Project
          </Typography>
          <Typography
            className="hero-text"
            variant="h6"
            component="p"
            sx={{ fontWeight: 400, mb: 4, opacity: 0.95 }}
          >
            Over 30 years delivering residential, commercial, fireproofing and maintenance
            projects with unmatched craftsmanship and care.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button component={RouterLink} to="/projects" variant="contained" size="large">
              View Our Work
            </Button>
            <Button
              component={RouterLink}
              to="/#contact"
              variant="outlined"
              size="large"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": { borderColor: "white", backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </Box>
      </div>
    </Box>
  );
}

export default Header;
