import Logo from '../../assets/logo.png'
import Lupa from '../../assets/lupa.svg'
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
        <nav>
            <div className={`navbar ${menuOpen ? 'active' : ''}`}>
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <Link to="/">
                        <img className='logo' src={Logo} alt="Netflix logo" />
                    </Link>
                </ul>
                <button className="menu-toggle" onClick={toggleMenu}>
                    &#9776;
                </button>
            </div>
        </nav>
    )
}