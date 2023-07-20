import React from "react";
import Menu from "./Menu";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import PageDivider from "./PageDivider";
import ToolKit from "./Toolkit";
import Footer from "./Footer";

export default function App() {

    return (
        <div>
            <Menu />
            <Introduction />
            <PageDivider />
            <Projects />
            <PageDivider />
            <AboutMe />
            <PageDivider />
            <ToolKit />
            <PageDivider />
            <Footer />
        </div>
    );
}
