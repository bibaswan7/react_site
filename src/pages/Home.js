import React from "react";
import About from "../Layout/About";
import Services from "../Layout/Services";
import Work from "../Layout/Work";
import Blog from "../Layout/Blog";
import Testimonies from "../Layout/Testimonies";

export default function Home(){
    return(
        <div className="home-container">
        
        <About />
        
        <Services />
        <Work count= {4}/>
        <Blog count={8} />
        <Testimonies />
        </div>
    )
}