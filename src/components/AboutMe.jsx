import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutMe() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="flex justify-center">


            <div className="flex flex-col md:flex-row h-full md:h-screen w-[85%] max-w-5xl justify-center md:justify-between md:items-center">


                <div data-aos="fade-up" data-aos-duration="2000" className="flex w-full md:w-[40%] my-12 justify-center items-center">
                    <img className="text-center w-[300px] md:w-full rounded-3xl" src="../images/me03.jpg" alt="Me" />
                </div>


                <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col md:h-[40%] md:w-[50%] justify-center">


                    <div className="my-4">
                        <h1>About Me</h1>
                    </div>

                    <div className="text-lg">
                        <div className="my-4">
                            I graduated Mechanical Engineering ⚙️ from the <span className="font-semibold text-[#73a86c]">University of Victoria</span> in 2022 with
                            a bachelor's degree and 20-months of co-op experience.
                        </div>

                        <div className="my-4">
                            The co-op program allowed me to explore various fields such as process engineering, software development, and IT.
                            Currently, I am working as a Process Engineer II for <span className="font-semibold text-[#73a86c]">Redlen Technologies, Canon Inc.</span>
                        </div>

                        <div className="my-4">
                            Besides programming in my spare time, 👩🏻‍💻 you can often find me playing video games such as
                            Valorant <span className="text-sm italic">(ex top 300 Radiant <span className="not-italic">🤓</span>)</span>. I also love trying new foods 🍜 so feel free to reach out with any spot recommendations!
                        </div>
                    </div>


                </div>



            </div >



        </div >
    );
}