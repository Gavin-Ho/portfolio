import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactMe() {


    return (
        <div id="contact" className="flex flex-col w-full h-full bg-[#9ebb9a63] justify-center items-center">


            <div className="flex flex-col md:flex-row h-full w-[85%] max-w-5xl justify-center md:justify-between my-16">

                <div className="md:w-[40%]">
                    <h2 className="text-[#73a86c] text-3xl mb-6">Contact Me</h2>


                    If you have questions about me or my projects, you can find me on social media or you can send a message here!


                    <div className="flex flex-row text-[#73a86c] text-3xl my-4">
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



                <div className="md:w-[50%]">
                    <form method="post" name="contactform" className="contactForm" data-netlify="true" action="success-page.html" netlify-honeypot="bot-field">
                        <div className="flex flex-col">
                            <input type="hidden" name="form-name" value="contactForm" />
                            <p hidden>
                                <label>
                                    Don't fill this out if you're human: <input name="bot-field" />
                                </label>
                            </p>

                            <input className="my-2 px-2 border-2 border-[#89aa84] rounded-lg" type="text" name="name" placeholder="Name" />
                            <input className="my-2 px-2 border-2 border-[#89aa84] rounded-lg" type="email" name="email" placeholder="Email Address" />
                            <textarea className="my-2 px-2 border-2 border-[#89aa84] rounded-lg" type="text" name="message" placeholder="Message" rows="6" />

                            <div className="my-2">
                                <button className="py-1 px-3 border-2 border-[#73a86c] bg-[#73a86c] hover:bg-[#4c7a47] hover:border-[#4c7a47] text-white rounded-lg" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>

                </div>

            </div>


        </div>
    );
}
