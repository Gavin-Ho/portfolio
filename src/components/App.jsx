import React from "react";
import Menu from "./Menu";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import PageDivider from "./PageDivider";
import Skills from "./Skills";
import Footer from "./Footer";
import ContactMe from "./ContactMe";

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
            <Skills />
            <PageDivider />
            <ContactMe />
            <Footer />
        </div>
    );
}
