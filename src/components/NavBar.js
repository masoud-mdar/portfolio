import React from "react"
import {NavLink} from "react-router-dom"

const NavBar = (props) => {

    return (
        <div className="navbar">
            <div className="nav-logo"></div>
            <div className="nav-links">
                <NavLink to="/portfolio" activeClassName="link-active" className="nav-link" exact={true}>Home</NavLink>
                <NavLink to="/projects" activeClassName="link-active" className="nav-link">Projects</NavLink>
                <NavLink to="/about" activeClassName="link-active" className="nav-link">About</NavLink>
                <NavLink to="/contact" activeClassName="link-active" className="nav-link">Contact</NavLink>
            </div>
        </div>
    )
}

export default NavBar

