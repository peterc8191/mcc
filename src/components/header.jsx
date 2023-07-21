import logo from "../images/MCC_Logo.png";
import { Grid, Typography } from "@mui/material";

function Header() {
  return (
    <div className="hero-image">
      <div className="container-wrapper">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item lg={6} md={6} xs={12} container justifyContent="center" alignItems="center">
            <img src={logo} className="logo-animation logo-image" alt={"logo"} />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Typography className="hero-text">
              Welcome to Michael Connolly Contracts, where exceptional craftsmanship meets unparalleled dedication. As a
              premier construction company, we specialize in delivering top-quality projects that surpass expectations.
              With our extensive expertise, unwavering commitment to excellence, and personalized approach, we are your
              trusted partner in bringing your construction visions to life.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Header;
