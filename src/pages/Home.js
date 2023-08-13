import React from "react";
import AboutLayout from "../Layout/AboutLayout";
import Service from "../Layout/Service";
import Work from "../Layout/Work";
import Blog from "../Layout/Blog";
import Testimonies from "../Layout/Testimonies";

export default function Home() {
  return (
    <div className="home-container">
      <AboutLayout slideRequired={true} btnContent={"Contact me"}/>

      <Service />
      <Work count={4} />
      <Blog count={8} navIconRequired={true} />
      <Testimonies />
    </div>
  );
}
