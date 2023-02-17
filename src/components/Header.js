import React from 'react';
import digiturk from '../assets/images/digi.png';


function Header(props) {
    return (
        <header className="h-28 flex justify-center items-center">
            <div className="container flex justify-around place-items-center">
                <img src={digiturk} className='w-40' alt="logo"/>
            </div>
        </header>
    );
}

export default Header;