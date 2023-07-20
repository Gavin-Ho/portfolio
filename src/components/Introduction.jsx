import React from "react";
import { FaLinkedin, FaGithub, FaAngleDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import '../styles.css';


export default function Introduction() {

    return (
        <div className="flex justify-center">


            <div className="flex flex-col md:flex-row h-screen w-[85%] max-w-5xl justify-center md:justify-between md:items-center">


                <div className="flex flex-col md:h-[40%] md:w-[50%] justify-center mb-6">


                    <div className="">
                        <h1>Hello! I'm Gavin ✌️</h1>
                    </div>



                    <div className="my-5">
                        Welcome to my portfolio! I'm a <span className="font-semibold text-[#73a86c]">full stack developer</span> based in Victoria, British Columbia. Check out some of my favourite personal projects below.
                    </div>


                    <div className="flex flex-row text-[#4F473B] text-3xl">
                        <ul className="flex my-2">
                            <li className="hover:text-[#312E28] mr-8">
                                <a href="https://github.com/Gavin-Ho" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            </li>
                            <li className="hover:text-[#312E28] mr-8">
                                <a href="https://www.linkedin.com/in/gavinjsho" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            </li>
                            <li className="hover:text-[#312E28] mr-8">
                                <a href="" target="_blank" rel="noopener noreferrer"><MdEmail /></a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="flex md:w-[35%] justify-center items-center">
                    <img className="text-center w-[350px] md:w-full avatar-wobble" src="../images/me.png" alt="Me" />
                </div>


            </div >


            <div className="absolute bottom-5 text-[#89aa84] text-3xl animate-bounce">
                <FaAngleDown />
            </div>


        </div >
    );
}
