import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles.css';

export default function Projects() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="projects" className="flex justify-center">
            <div className="flex flex-col w-[90%] max-w-5xl">


                <div className="text-center">
                    <h1 className="text-4xl">Projects</h1>
                </div>


                <div className="flex flex-col w-full md:flex-row md:justify-between items-center mt-32">


                    <div data-aos="zoom-in-right" data-aos-duration="1500" className="w-[80%] md:w-[30%]">
                        <img className="rounded-3xl" src="../images/wordle-frontend_mockup.gif" alt="Wordle-frontend"></img>
                    </div>


                    <div data-aos="zoom-in-left" data-aos-duration="1500" className="flex flex-col h-full w-full md:w-[60%] text-center md:text-left justify-center">
                        <h1 className="my-4">
                            Wordle Tournament Tracker
                        </h1>


                        <p className="">
                            A tracker that parses Facebook conversations and displays tournament standings. Developed for a monthly Wordle tournament among friends.
                        </p>


                        <div className="flex flex-row justify-center md:justify-start items-center text-sm font-semibold my-6">
                            <button className="hover:underline underline-offset-8 decoration-4 decoration-[#89aa84] mr-4">
                                <a href="/#">VIEW LIVE</a>
                            </button>
                            <span className="mr-4">|</span>
                            <button className="hover:underline underline-offset-8 decoration-4 decoration-[#89aa84] mr-4">
                                <a href="/#">GITHUB</a>
                            </button>
                        </div>


                        <div className="">
                            <ul className="flex flex-row justify-center md:justify-start items-center text-sm md:text-md">
                                <li className="border-2 rounded-[2rem] mr-2 border-[#7e8e7c79]">
                                    <div className="px-3 py-1 md:px-4 md:py-2">React</div>
                                </li>
                                <li className="border-2 rounded-[2rem] mr-2 border-[#7e8e7c79]">
                                    <div className="px-3 py-1 md:px-4 md:py-2">ExpressJS</div>
                                </li>
                                <li className="border-2 rounded-[2rem] mr-2 border-[#7e8e7c79]">
                                    <div className="px-3 py-1 md:px-4 md:py-2">NodeJS</div>
                                </li>
                                <li className="border-2 rounded-[2rem] mr-2 border-[#7e8e7c79]">
                                    <div className="px-3 py-1 md:px-4 md:py-2">TailWind</div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>




                <div className="flex flex-col w-full md:flex-row-reverse md:justify-between items-center mt-32">


                    <div data-aos="zoom-in-left" data-aos-duration="1500" className="w-[100%] md:w-[45%]">
                        <img className="rounded-3xl" src="../images/carrot-quest_mockup.gif" alt="Carrot Quest"></img>
                    </div>


                    <div data-aos="zoom-in-right" data-aos-duration="1500" className="flex flex-col h-full w-full md:w-[45%] text-center md:text-right justify-center">


                        <h1 className="my-4">
                            Carrot Quest Minigame
                        </h1>


                        <p className="">
                            An arcade-style minigame where the user controls a pig-themed air balloon to collect carrots in the sky.
                        </p>

                        <div className="flex flex-row justify-center md:justify-end items-center text-sm font-semibold my-6">
                            <button className="hover:underline underline-offset-8 decoration-4 decoration-[#89aa84] mr-4 md:mr-0 md:ml-4">
                                <a href="/#">VIEW LIVE</a>
                            </button>
                            <span className="mr-4 md:mr-0  md:ml-4">|</span>
                            <button className="hover:underline underline-offset-8 decoration-4 decoration-[#89aa84] mr-4 md:mr-0  md:ml-4">
                                <a href="/#">GITHUB</a>
                            </button>
                        </div>


                        <div className="">
                            <ul className="flex flex-row justify-center md:justify-end items-center text-sm md:text-md">
                                <li className="border-2 rounded-[2rem] ml-2 border-[#7e8e7c79]">
                                    <div className="px-3 py-1 md:px-4 md:py-2">React</div>
                                </li>
                                <li className="border-2 rounded-[2rem] ml-2 border-[#7e8e7c79]">
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

