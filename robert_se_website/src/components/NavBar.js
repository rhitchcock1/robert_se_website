import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar(){

    return(
        <>
        <ul>
            <li><NavLink to='/' exact> Home </NavLink></li>
            <li><NavLink to= '/About' exact> </NavLink></li>
            <li><NavLink to='/Contact' exact> Contact </NavLink></li>
        </ul>
        </>
  )
}

export default NavBar