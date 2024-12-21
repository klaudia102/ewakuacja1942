
import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className='navbar_container container-header '>
        <p className="nav-item logo_pic">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <a className="navbar-brand" href="#">
              <img src="/Ewakuowani(5).png" alt="ewakuowani1942 logo" height="90px" />
            </a>
          </NavLink>
        </p>
        <div className="nav nav-tabs nav_tabs_container ">

          <p className="nav-item nav_link">
            <NavLink
              to="/search"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link '
              }
            >
              Szukaj
            </NavLink>
          </p>
          {/* <p className="nav-item nav_link">
            <NavLink
              to="/history"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Historia <br />ewakuacji
            </NavLink>
          </p> */}
          <p className="nav-item nav_link">
            <NavLink
              to="/contact"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Kontakt
            </NavLink>
          </p>
        </div>
      </div>
    </>
  )
}

export default Navbar