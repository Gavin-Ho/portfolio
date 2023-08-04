import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactMe() {


    return (
        <div id="contact" className="flex flex-col w-full h-full bg-[#9ebb9a63] justify-center items-center">


            <div className="flex flex-col md:flex-row h-full w-[85%] max-w-5xl justify-center md:justify-between my-16">

                <div className="md:w-[35%]">
                    <h2 className="text-[#73a86c] mb-6">Contact Me</h2>


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
                    <form
                        method='POST'
                        name='contactform'
                        className='contactForm'>

                        <input
                            type='hidden'
                            name='form-name'
                            value='contactForm' />

                        <input
                            type='text'
                            name='name'
                            placeholder='Enter your name' />

                        <input
                            type='email'
                            name='email'
                            placeholder='Enter your email' />

                        <textarea
                            name='message'
                            placeholder='Messaage'></textarea>

                        <button type='submit'>Submit</button>
                    </form>

                </div>

            </div>


        </div>
    );
}
