import * as React from "react";
import Header from "../components/header";
import Profile from "../components/profile";
import Services from "../components/services";
import FeaturedProjects from "../components/featured-projects";

function Home() {
  return (
    <>
      <Header />
      <Profile />
      <Services />
      <FeaturedProjects />
    </>
  );
}

export default Home;
