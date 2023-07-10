import { Grid, Typography } from "@mui/material";
import ImageStack from "./image-stack";

function Profile() {
  return (
    <div className="container-wrapper">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item lg={4} md={4} xs={12} container justifyContent="center" alignItems="center">
          <ImageStack />
        </Grid>
        <Grid item lg={8} md={8} xs={12}>
          <Typography gutterBottom variant="h4" component="div">
            {"About MCC"}
          </Typography>
          <Typography>
            Welcome to Michael Connolly Contracts, a leading building contractor based in Ireland, with over 30 years of
            experience in the industry. With a strong focus on residential, commercial, maintenance, and fireproofing
            projects, we have established ourselves as a trusted name in the construction sector, delivering exceptional
            results and unparalleled customer satisfaction.
          </Typography>
          <Typography>
            As an experienced building contractor, we understand the unique requirements of both residential and
            commercial construction projects. From the construction of custom homes and renovations to the development
            of commercial spaces and office complexes, our team of skilled professionals has the expertise to bring your
            vision to life. We work closely with you throughout the entire process, ensuring that every detail is
            carefully considered, and your project is delivered on time and within budget.
          </Typography>
          <Typography>
            In addition to new construction, we specialize in maintenance services to keep your properties in optimal
            condition. Our comprehensive maintenance solutions cover everything from routine inspections and repairs to
            ongoing facility management, providing you with peace of mind and ensuring the longevity of your
            investments.
          </Typography>
          <Typography>
            At Michael Connolly Contracts, we recognize the importance of fireproofing in safeguarding your properties
            and ensuring the safety of occupants. Our team is trained in the latest fireproofing techniques and utilizes
            industry-approved materials to provide effective fire protection solutions. We conduct thorough assessments,
            develop tailored fireproofing plans, and implement measures that meet or exceed all safety regulations.
          </Typography>
          <Typography>
            With a strong emphasis on quality and customer satisfaction, we prioritize the use of premium materials,
            advanced construction techniques, and meticulous attention to detail. Our commitment to excellence has
            earned us a reputation for delivering projects of the highest standards, resulting in the trust and loyalty
            of our clients.
          </Typography>
          <Typography>
            As a client-centric company, we pride ourselves on our transparent and collaborative approach. We prioritize
            open communication, ensuring that you are informed and involved throughout every stage of the construction
            process. We believe in building long-term relationships with our clients, based on trust, reliability, and
            outstanding service.
          </Typography>
          <Typography>
            Experience the difference of working with an established building contractor with a proven track record.
            Contact Michael Connolly Contracts today to discuss your residential, commercial, maintenance, or
            fireproofing project. Let us bring our expertise, dedication, and passion for construction to turn your
            ideas into reality.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
