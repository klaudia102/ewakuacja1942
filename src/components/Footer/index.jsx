import React from 'react';
import './style.css';

function Footer() {
    return (
        <footer>
            <div className='contact_container'>
                <p>Kontact</p>
                <p1>ewakuowani1942@gmail.com</p1>
            </div>
            <div className='footer_logo'>
            <img src="/Ewakuowani(5).png" alt="ewakuowani1942 logo" height="90px" />
            </div>
            <div className='copy_rights_container'>
                <p>Prawa autorskie do strony</p>
                <a href='https://klaudia102.github.io/Klaudia-portfolio-react/'>Klaudia Kierepka</a>
            </div>
        </footer>
    )
}

export default Footer