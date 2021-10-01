import React from "react"
import {HashLink} from "react-router-hash-link"

const Top = () => {

    return (
        <div className="top-wrapper">
            <div className="text">
                <div className="text-part">
                    <p>Hi,</p>
                    <p>My name is Masoud,</p>
                    <p>I can talk to computers...</p>
                    <p>Well, I'm a web developer!</p>
                </div>
                <div className="btn-wrapper">
                    <div className="fake-borders">
                        <HashLink smooth to="#projects" className="projects-button">My Projects</HashLink>
                    </div>
                    <div className="flash">
                        <HashLink smooth to="#projects" className="flash-button"></HashLink>
                    </div>
                    
                </div>
                    
            </div>
            <div className="top-part"></div>
        </div>
    )
}

export default Top