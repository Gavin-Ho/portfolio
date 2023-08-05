import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutMe() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (

        <div id="about" className="flex flex-col justify-center items-center">

            <div className="flex justify-center my-12">
                <div className="flex text-center">
                    <h1>About</h1>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col md:flex-row h-full w-[85%] max-w-5xl justify-center md:justify-between md:items-center">



                <div className="flex w-full md:w-[35%] justify-center items-center">
                    <img className="text-center w-[350px] md:w-full avatar-wobble" src="../images/me.png" alt="Me" />
                </div>


                <div className="flex flex-col md:h-[40%] md:w-[55%] justify-center">




                    <div className="text-lg my-12">
                        <div className="my-4">
                            Hello again! I recently graduated from the <span className="font-medium text-[#73a86c]">University of Victoria</span> with a bachelor's degree
                            in Mechanical Engineering 🤖 and 20 months of co-op experience. Currently I am working a Process Engineer II
                            at <span className="font-medium text-[#73a86c]">Redlen Technologies.</span>
                        </div>

                        <div className="my-4">
                            Besides coding in my spare time, 👩🏻‍💻 you can often find me playing video games such as
                            Valorant <span className="text-sm italic">(ex top 300 Radiant <span className="not-italic">🤓</span>)</span> or kicking it with any board sport 🏄.
                            I also love trying new foods so feel free to reach out with any restaurant recommendations!
                        </div>
                    </div>


                </div>




            </div >



        </div >
    );
}