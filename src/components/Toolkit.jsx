import React from "react";
import SkillCard from "./SkillCard";


export default function ToolKit() {

    return (
        <div id="about" className="flex justify-center">

            <div className="flex flex-col h-full w-[85%] max-w-5xl">


                <div className="flex">
                    <div className="flex text-center">
                        <h1 className="mx-14">My Toolbox 🤹</h1>
                    </div>
                </div>

                <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 my-16 items-end gap-x-8 gap-y-12">

                    <SkillCard title={"Basics"} imgSrc={"../images/basics.png"} imgAlt={"basics.png"} />

                    <SkillCard title={"React"} imgSrc={"../images/React-icon.svg"} imgAlt={"react-icon.svg"} />

                    <SkillCard title={"TailwindCSS"} imgSrc={"../images/tailwindcss.png"} imgAlt={"tailwindcss.png"} />

                    <SkillCard title={"Responsive"} imgSrc={"../images/responsive.png"} imgAlt={"responsive.png"} />

                    <SkillCard title={"Node.js"} imgSrc={"../images/nodejs.svg"} imgAlt={"nodejs.svg"} />

                    <SkillCard title={"Git"} imgSrc={"../images/Git-Icon.svg"} imgAlt={"Git-Icon.svg"} />

                    <SkillCard title={"SQL"} imgSrc={"../images/database-icon.png"} imgAlt={"database-icon.png"} />

                    <SkillCard title={"Python"} imgSrc={"../images/Python-logo-notext.svg"} imgAlt={"Python-logo-notext.svg"} />

                    <SkillCard title={"C++"} imgSrc={"../images/c++_icon.png"} imgAlt={"c++_icon.png"} />


                </div>



            </div>
        </div>
    );
}
