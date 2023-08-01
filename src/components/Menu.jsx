import React, { useState } from 'react';



export default function Menu() {


    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = "h-1 w-6 my-[2.5px] rounded-full transition ease transform duration-300";


    const handleClick = () => setIsOpen(!isOpen);


    return (
        <div>
            <div className="fixed right-8 top-8 z-20">
                <button
                    className="flex flex-col h-full w-full group"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div
                        className={`${genericHamburgerLine} ${isOpen
                            ? "rotate-45 translate-y-[9px] bg-white"
                            : "bg-[#4c7a47]"
                            }`}
                    />
                    <div
                        className={`${genericHamburgerLine} ${isOpen
                            ? "opacity-0"
                            : "bg-[#4c7a47]"
                            }`}
                    />
                    <div
                        className={`${genericHamburgerLine} ${isOpen
                            ? "-rotate-45 -translate-y-[9px] bg-white"
                            : "bg-[#4c7a47]"
                            }`}
                    />
                </button>
            </div>


            <div
                className={
                    !isOpen
                        ? "fixed top-[-100%] w-[100%] flex flex-col justify-center items-center h-full ease-in-out duration-500 bg-[#73a86c] z-10"
                        : "fixed top-0 w-[100%] flex flex-col justify-center items-center h-full font-semibold bg-[#73a86c] ease-in-out duration-500 z-10"
                }
            >
                <ul className="text-3xl text-white text-center">
                    <li className="mx-4 my-12">
                        <a onClick={handleClick} href="#projects" className="hover:text-[#4c7a47]">Projects</a>
                    </li>
                    <li className="mx-4 my-12">
                        <a onClick={handleClick} href="#about" className="hover:text-[#4c7a47]">About Me</a>
                    </li>
                    <li className="mx-4 my-12">
                        <a onClick={handleClick} href="#contact" className="hover:text-[#4c7a47]">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
