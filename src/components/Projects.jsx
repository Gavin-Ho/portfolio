import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles.css';
import { FaGithub } from "react-icons/fa";

export default function Projects() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="projects" className="flex justify-center">
            <div className="flex flex-col w-[90%] max-w-5xl my-12">

                <div className="flex justify-center">
                    <div className="flex text-center">
                        <h1>Projects</h1>
                    </div>
                </div>


                <div className="flex flex-col w-full md:flex-row md:justify-between items-center mt-24">


                    <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex w-[80%] md:w-[30%] justify-center">
                        <img className="rounded-3xl" src="../images/wordle-frontend_mockup.gif" alt="Wordle-frontend"></img>
                    </div>


                    <div data-aos="zoom-in-left" data-aos-duration="1000" className="flex flex-col h-full w-full md:w-[60%] text-center md:text-left justify-center">
                        <h2 className="my-4">
                            Wordle Tournament Tracker
                        </h2>


                        <p className="">
                            A tracker that parses Facebook conversations and displays tournament standings. Developed for a monthly Wordle tournament among friends.
                        </p>


                        <div className="flex flex-row justify-center md:justify-start items-center text-sm font-semibold my-6">
                            <button className="hover:underline underline-offset-8 decoration-4 decoration-[#89aa84] mr-4">
                                <a href="https://wordletourney.gavin-ho.com/" target="_blank" rel="noopener noreferrer">VIEW LIVE</a>
                            </button>
                            <span className="mr-4">|</span>
                            <button className="hover:underline underline-offset-8 decoration-4 decoration-[#89aa84] mr-4">
                                <a href="https://github.com/Gavin-Ho/wordle-tracker" target="_blank" rel="noopener noreferrer" className="flex items-center"><FaGithub />&nbsp;FRONTEND</a>
                            </button>
                            <span className="mr-4">|</span>
                            <button className="hover:underline underline-offset-8 decoration-4 decoration-[#89aa84] mr-4">
                                <a href="https://github.com/Gavin-Ho/wordle-api" target="_blank" rel="noopener noreferrer" className="flex items-center"><FaGithub />&nbsp;API</a>
                            </button>
                        </div>


                        <div className="">
                            <ul className="flex flex-row justify-center md:justify-start items-center text-sm md:text-md">
                                <li className="border-2 rounded-[2rem] mr-2 border-[#8b8b8b79]">
                                    <div className="px-3 py-1 md:px-4 md:py-2">React</div>
                                </li>
                                <li className="border-2 rounded-[2rem] mr-2 border-[#8b8b8b79]">
                                    <div className="px-3 py-1 md:px-4 md:py-2">Express.js</div>
                                </li>
                                <li className="border-2 rounded-[2rem] mr-2 border-[#8b8b8b79]">
                                    <div className="px-3 py-1 md:px-4 md:py-2">Node.js</div>
                                </li>
                                <li className="border-2 rounded-[2rem] mr-2 border-[#8b8b8b79]">
                                    <div className="px-3 py-1 md:px-4 md:py-2">TailWind</div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>




                <div className="flex flex-col w-full md:flex-row-reverse md:justify-between justify-center items-center mt-24">


                    <div data-aos="zoom-in-left" data-aos-duration="1000" className="flex w-[100%] md:w-[45%] justify-center">
                        <img className="rounded-3xl" src="../images/carrot-quest_mockup.gif" alt="Carrot Quest"></img>
                    </div>


                    <div data-aos="zoom-in-right" data-aos-duration="1000" className="flex flex-col h-full w-full md:w-[45%] text-center md:text-right justify-center">


                        <h2 className="my-4 text-2xl">
                            Carrot Quest Minigame
                        </h2>


                        <p className="">
                            An arcade-style minigame where the user controls a pig-themed air balloon to collect carrots in the sky. Optimized for desktop only.
                        </p>

                        <div className="flex flex-row justify-center md:justify-end items-center text-sm font-semibold my-6">
                            <button className="hover:underline underline-offset-8 decoration-4 decoration-[#89aa84] mr-4 md:mr-0 md:ml-4">
                                <a href="https://carrotquest.gavin-ho.com/" target="_blank" rel="noopener noreferrer">VIEW LIVE</a>
                            </button>
                            <span className="mr-4 md:mr-0  md:ml-4">|</span>
                            <button className="hover:underline underline-offset-8 decoration-4 decoration-[#89aa84] mr-4 md:mr-0  md:ml-4">
                                <a href="https://github.com/Gavin-Ho/react-sky-minigame" target="_blank" rel="noopener noreferrer" className="flex items-center"><FaGithub />&nbsp;GITHUB</a>
                            </button>
                        </div>


                        <div className="">
                            <ul className="flex flex-row justify-center md:justify-end items-center text-sm md:text-md">
                                <li className="border-2 rounded-[2rem] ml-2 border-[#8b8b8b79]">
                                    <div className="px-3 py-1 md:px-4 md:py-2">React</div>
                                </li>
                                <li className="border-2 rounded-[2rem] ml-2 border-[#8b8b8b79]">
                                    <div className="px-3 py-1 md:px-4 md:py-2">TailWind</div>
                                </li>
                            </ul>
                        </div>


                    </div>



                </div>


            </div>
        </div>
    );
}

