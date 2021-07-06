import React from "react"
import {Link} from "react-router-dom"
import ScrollButton from "./ScrollButton"
import HomeProjects from "./HomeProjects"
import Top from "./Top"

const HomePage = () => {

    return (
        <div>

            <Top />
            
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