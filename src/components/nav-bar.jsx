import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../images/MCC_Logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Projects Completed", to: "/projects" },
  { label: "Contact", to: "/#contact" },
];

function NavBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ backgroundColor: "background.paper" }}>
      <Toolbar>
        <Box
          component={RouterLink}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
            flexGrow: 1,
          }}
        >
          <img src={logo} alt="Michael Connolly Contracts logo" style={{ height: 40, marginRight: 12 }} />
          <Typography variant="h6" component="span" color="text.primary">
            Michael Connolly Contracts
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          {navLinks.map((link) => (
            <Button key={link.to} component={RouterLink} to={link.to} color="inherit">
              {link.label}
            </Button>
          ))}
        </Box>

        <IconButton
          color="inherit"
          aria-label="open navigation menu"
          onClick={() => setDrawerOpen(true)}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 240 }} role="presentation">
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.to} disablePadding>
                <ListItemButton
                  component={RouterLink}
                  to={link.to}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default NavBar;
