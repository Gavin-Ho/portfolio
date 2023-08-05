import React, { useEffect } from "react";
import { FaLinkedin, FaGithub, FaAngleDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles.css';


export default function Introduction() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="flex justify-center">


            <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col md:flex-row h-screen w-[85%] max-w-5xl justify-center md:justify-between md:items-center">

                <div className="flex md:w-[35%] justify-center items-center mb-6">
                    <img className="text-center w-[350px] md:w-full" src="../images/undraw_drink_coffee_v3au.png" alt="Me" />
                </div>

                <div className="flex flex-col md:h-[40%] md:w-[55%] justify-center mb-6">


                    <div className="flex">
                        <div className="flex text-center">
                            <p className="text-3xl font-semibold text-[#312E28]">Hello! I'm Gavin ✌️</p>
                        </div>
                    </div>


                    <div className="my-5">
                        Welcome to my portfolio! I'm a <span className="text-[#73a86c] font-medium">full stack developer</span> and <span className="text-[#73a86c] font-medium">engineer</span> based in Victoria, British Columbia.
                        Check out a couple of my favourite personal projects below!
                    </div>


                    <div className="flex flex-row text-[#73a86c] text-3xl">
                        <ul className="flex my-2">
                            <li className="hover:text-[#4c7a47] mr-8">
                                <a href="https://github.com/Gavin-Ho" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            </li>
                            <li className="hover:text-[#4c7a47] mr-8">
                                <a href="https://www.linkedin.com/in/gavinjsho" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            </li>
                            <li className="hover:text-[#4c7a47] mr-8">
                                <a href="mailto:gavinjsho@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail /></a>
                            </li>
                        </ul>
                    </div>


                </div>





            </div >


            <div className="absolute bottom-5 text-[#89aa84] text-3xl animate-bounce">
                <FaAngleDown />
            </div>


        </div >
    );
}
