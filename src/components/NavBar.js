import React from "react"
import {NavLink} from "react-router-dom"

const NavBar = (props) => {

    return (
        <div className="navbar">
            <div className="nav-logo"></div>
            <div className="nav-links">
                <div className="left-links">
                    <NavLink to="/portfolio" activeClassName="link-active" className="nav-link" exact={true}>Home</NavLink>
                    <NavLink to="/portfolio/projects" activeClassName="link-active" className="nav-link">Projects</NavLink>
                </div>
                <div className="right-links">
                    <NavLink to="/portfolio/about" activeClassName="link-active" className="nav-link">About</NavLink>
                    <NavLink to="/portfolio/contact" activeClassName="link-active" className="nav-link">Contact</NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar

