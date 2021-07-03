import React from "react"
import {NavLink} from "react-router-dom"

const NavBar = (props) => {

    return (
        <div className="navbar">
            <div className="nav-logo"></div>
            <div className="nav-links">
                <NavLink to="/" activeClassName="link-active" exact={true}>Home</NavLink>
                <NavLink to="/projects" activeClassName="link-active">Projects</NavLink>
                <NavLink to="/about" activeClassName="link-active">About</NavLink>
                <NavLink to="/contact" activeClassName="link-active">Contact</NavLink>
            </div>
        </div>
    )
}

export default NavBar

