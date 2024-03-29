
import React from 'react';
import { useState, useEffect } from 'react';

import './style.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>

      <div ClassName='navbar_container'>
        <ul className="nav nav-tabs ">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <a className="navbar-brand" href="#">
              <img src="public/ewakuowani.png" alt="ewakuowani1942 logo" width="100" />
            </a>
          </NavLink>
          <li className="nav-item">
            <NavLink
              to="/search"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Szukaj
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/history"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Historia <br />ewakuacji
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Kontact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar