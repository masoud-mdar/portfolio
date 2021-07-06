import React from "react"
import {HashLink} from "react-router-hash-link"
import {Link} from "react-router-dom"
import ScrollButton from "./ScrollButton"
import HomeProjects from "./HomeProjects"

const HomePage = () => {

    return (
        <div>

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
            

            <div className="container">
                
                <div className="main-part">

                    <div className="main-part-title">
                        <h2>My Projects</h2>
                    </div>

                    <div className="more-projects">
                        <Link to="/projects" className="more-p-link">See More Projects</Link>
                    </div> 

                    <HomeProjects />


                </div>
            </div>
            <div className="footer">
                <div className="footer-signature">
                    <p>Masoud Mohammadi Darvishvand</p>
                </div>
            </div>
            <ScrollButton />

        </div>
    )
}

export default HomePage