import React, { useState } from 'react';
import Burger from '@animated-burgers/burger-squeeze';
import '@animated-burgers/burger-squeeze/dist/styles.css';
import '../burger-styles.css';

export default function Menu() {

    const [menu, setMenu] = useState(false);

    function handleClick() {
        setMenu(!menu);
    }

    return (
        <div className="fixed right-6 top-6">
            <Burger onClick={handleClick} isOpen={menu} />
        </div>
    );
}
