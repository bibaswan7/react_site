import React from "react";
import Blog from "../Layout/Blog";


export default function Blogs(){
    return(
        <Blog count={9} navIconRequired={false} customClass={"blog-item-grid"}/>
    )
}