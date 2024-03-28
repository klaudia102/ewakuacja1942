import { useState, useEffect } from 'react';

import './style.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 576); // Define mobile width threshold
        };

        checkIsMobile(); // Initial check

        const handleResize = () => {
            checkIsMobile(); // Check whenever window is resized
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup
        };
    }, []);

    return (
        <>
            {!isMobile && (
                <header className="header-container">
                    <div className="container">
                        <nav className="nav">
                            
                            <Link to="/" className="nav__logo"><img src="../public/ewakuowani" alt="Ewakuowani1942" width="100px" height="auto" /></Link>
                            <ul className="nav__list">
                                <li className="nav__">
                                    <Link to="/" className="nav__link">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav__">
                                    <Link to="/search" className="nav__link active-link">
                                        Search
                                    </Link>
                                </li>
                                <li className="nav__">
                                    <Link to="/contact" className="nav__link active-link">
                                        Contact
                                    </Link>
                                </li>
                                <li className="nav__">
                                    <Link to="/history" className="nav__link active-link">
                                        History
                                    </Link>
                                </li>
                                
                            </ul>
                        </nav>
                    </div>
                </header>
            )}

            {/* Conditional rendering of bottom navigation for mobile devices
            {isMobile && (
                <div className="bottom-nav">
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link to="/" className="nav__link active-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/Recipe" className="nav__link active-link">
                                    Recipe
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/Drinks" className="nav__link active-link">
                                    Drinks
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/Favourites" className="nav__link active-link">
                                    Favourites
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/Contact" className="nav__link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )} */}
        </>
    );
}
