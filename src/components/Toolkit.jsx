import React from "react";


export default function ToolKit() {

    return (
        <div id="about" className="flex justify-center">

            <div className="flex flex-col h-full w-[85%] max-w-5xl justify-center md:justify-between md:items-center">



                <div className="w-full text-center">
                    <h1>My Tool Box 🤹</h1>
                </div>


                <div className="flex justify-center items-center">

                    <div className=" w-[10%] ease-linear transform hover:scale-110 transition duration-300">
                        <img src="../images/basics.png" alt="basics"
                            className=" "></img>
                    </div>

                    <div className=" w-[10%] ease-linear transform hover:scale-110 transition duration-300">
                        <img src="../images/React-icon.svg" alt="react-icon"
                            className=" "></img>
                    </div>

                    <div className=" w-[10%] ease-linear transform hover:scale-110 transition duration-300">
                        <img src="../images/tailwindcss.png" alt="tailwindcss"
                            className=" "></img>
                    </div>

                    <div className=" w-[10%] ease-linear transform hover:scale-110 transition duration-300">
                        <img src="../images/responsive.png" alt="tailwindcss"
                            className=" "></img>
                    </div>

                </div>



            </div>
        </div>
    );
}
