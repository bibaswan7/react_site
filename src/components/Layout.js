import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(){

    return(
        <div className="main-container">
        <Header />
        <Outlet />
        <h1>Here goes Footer</h1>
        <Footer />
        </div>
    )
}