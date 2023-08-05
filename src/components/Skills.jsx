import React from "react";
import SkillCard from "./SkillCard";


export default function Skills() {

    return (
        <div id="skills" className="flex justify-center">

            <div className="flex flex-col h-full xl:w-[50%] md:w-[65%] sm:w-[75%] w-[80%] max-w-5xl my-12">


                <div className="flex justify-center">
                    <div className="flex ">
                        <h1 className="">Skills</h1>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="2000" >
                    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 my-16 items-end gap-x-12 gap-y-16">

                        <SkillCard title={"Basics"} imgSrc={"../images/basics.png"} imgAlt={"basics.png"} />

                        <SkillCard title={"React"} imgSrc={"../images/React-icon.svg"} imgAlt={"react-icon.svg"} />

                        <SkillCard title={"Node.js"} imgSrc={"../images/nodejs.svg"} imgAlt={"nodejs.svg"} />

                        <SkillCard title={"Git"} imgSrc={"../images/Git-Icon.svg"} imgAlt={"Git-Icon.svg"} />

                        <SkillCard title={"TailwindCSS"} imgSrc={"../images/tailwindcss.png"} imgAlt={"tailwindcss.png"} />

                        <SkillCard title={"SQL"} imgSrc={"../images/database-icon.png"} imgAlt={"database-icon.png"} />

                        <SkillCard title={"Python"} imgSrc={"../images/Python-logo-notext.svg"} imgAlt={"Python-logo-notext.svg"} />

                        <SkillCard title={"C++"} imgSrc={"../images/c++_icon.png"} imgAlt={"c++_icon.png"} />


                    </div>
                </div>


            </div>
        </div>
    );
}
