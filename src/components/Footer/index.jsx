import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';


function Footer() {
    return (
        <footer>
            <div className='contact_link'>
<NavLink to='/contact' > Kontakt </NavLink> 
           </div>
            <div className='footer_logo'> 
            <NavLink to='/' >
            <a href="#">
              <img src="/Ewakuowani(5).png" alt="ewakuowani1942 logo" height="90px" />
            </a>
            </NavLink> 
            {/* <img src="/Ewakuowani(5).png" alt="ewakuowani1942 logo" height="90px"  /> */}
            </div>
            <div className='copy_rights_container'>
                <p>Prawa autorskie do strony</p>
                <a href='https://klaudia102.github.io/Klaudia-portfolio-react/'>Klaudia Kierepka</a>
            </div>
        </footer>
    )
}

export default Footer