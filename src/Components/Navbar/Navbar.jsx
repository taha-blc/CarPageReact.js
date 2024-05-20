import './Navbar.css'
import React from 'react'
const Navbar = () => {
    return (
        <div className='nav'>
            <div className="nav-logo">Ev-olution</div>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>Expkoer</li>
                <li>About</li>
                <li className='nav-contact'>Contact</li>
            </ul>

        </div>
    )
}

export default Navbar