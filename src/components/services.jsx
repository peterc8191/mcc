import * as React from "react";
import InfoCard from "./info-card";
import { Grid, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FactoryIcon from "@mui/icons-material/Factory";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import HandymanIcon from "@mui/icons-material/Handyman";

function Services() {
  return (
    <div className="container-wrapper">
      <Typography align="center" variant="h4" color="text.primary">
        Services we offer
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        <InfoCard
          title={"Residential"}
          description={
            "Offering expertise in building and renovating houses, apartments, and other residential structures. With a focus on quality craftsmanship"
          }
        >
          <HomeIcon className={"center-svg"} sx={{ fontSize: 40 }} />
        </InfoCard>
        <InfoCard
          title={"Commercial"}
          description={
            "Extensive experience in the commercial sector, we possess the expertise to handle diverse projects such as office buildings, retail spaces, warehouses, and more"
          }
        >
          <FactoryIcon className={"center-svg"} sx={{ fontSize: 40 }} />
        </InfoCard>
        <InfoCard
          title={"Fireproofing"}
          description={
            "Offering expertise in protecting structures from the risk of fire damage. With a strong focus on safety and compliance, we provide comprehensive fireproofing solutions for residential, commercial, and industrial buildings."
          }
        >
          <LocalFireDepartmentIcon className={"center-svg"} sx={{ fontSize: 40 }} />
        </InfoCard>
        <InfoCard
          title={"Maintenance"}
          description={
            "Catering to the ongoing upkeep and preservation of residential, commercial, and industrial properties. With a focus on preventive maintenance and prompt repairs, they offer a wide range of services to ensure the proper functioning and longevity of buildings."
          }
        >
          <HandymanIcon className={"center-svg"} sx={{ fontSize: 40 }} />
        </InfoCard>
      </Grid>
    </div>
  );
}

export default Services;
