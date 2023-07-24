import React, { useState } from 'react';
import Burger from '@animated-burgers/burger-squeeze';
import '@animated-burgers/burger-squeeze/dist/styles.css';
import '../burger-styles.css';

export default function Menu() {

    const [menu, setMenu] = useState(false);

    const handleClick = () => setMenu(!menu);


    return (
        <div>
            <div className="fixed right-6 top-6 z-20">
                <Burger onClick={handleClick} isOpen={menu} />
            </div>


            <div
                className={
                    !menu
                        ? "fixed top-[-100%] w-[100%] flex flex-col justify-center items-center h-full ease-in-out duration-500 bg-[#73a86c] z-10"
                        : "fixed top-0 w-[100%] flex flex-col justify-center items-center h-full font-semibold bg-[#73a86c] ease-in-out duration-500 z-10"
                }
            >
                <div className="flex flex-col justify-center h-[70px] text-3xl text-white">
                    Hello
                </div>
                <ul className="text-2xl text-white">
                    <li className="mx-4 my-12">
                        <a onClick={handleClick} href="#leaderboard">Leaderboard</a>
                    </li>
                    <li className="mx-4 my-12">
                        <a onClick={handleClick} href="#halloffame">Hall of Fame</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
