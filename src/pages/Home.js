import React from "react";
import About from "../Layout/About";
import Service from "../Layout/Service";
import Work from "../Layout/Work";
import Blog from "../Layout/Blog";
import Testimonies from "../Layout/Testimonies";

export default function Home(){
    return(
        <div className="home-container">
        
        <About />
        
        <Service />
        <Work count= {4}/>
        <Blog count={8} navIconRequired={true}/>
        <Testimonies />
        </div>
    )
}