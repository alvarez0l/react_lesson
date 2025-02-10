import React from 'react';
import './components/Header.css';

function Header() {
    return (
        <header className='navbar'>
            <nav>
                <h1>Its a mine App</h1>
                <ul>
                    <li>Page 1</li>
                    <li>Page 2</li>
                    <li>Page 3</li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;