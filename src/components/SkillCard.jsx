import React from "react";


export default function SkillCard(props) {

    // const cardHover = "ease-linear transform hover:scale-110 transition duration-100";

    return (

        <div className="flex flex-col justify-center items-center text-center">
            <img src={props.imgSrc} alt={props.imgAlt}
                className={`w-[40%]`} />
            <p className="text-lg font-semibold text-gray-700 my-2">{props.title}</p>
        </div>

    );
}
