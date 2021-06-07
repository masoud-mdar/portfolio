import React from "react"

const App = () => {

    return (
        <div>
            <div className="navbar">
                <div className="nav-logo"></div>
                <div className="nav-links">
                    <a href="#1">Home</a>
                    <a href="#2">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#4">Contact</a>
                </div>
            </div>
            <div className="top-wrapper">
                <div className="text">
                    <div className="text-part">
                        <p>Hi,</p>
                        <p>My name is Masoud,</p>
                        <p>I can talk to computers...</p>
                    </div>
                    <div className="btn-wrapper">
                        <div className="fake-borders">
                            <span className="projects-button">My Projects</span>
                        </div>
                        <div className="flash">
                            <div className="flash-button"></div>
                        </div>
                        
                    </div>
                        
                    
                </div>
                <div className="top-part"></div>
            </div>
            

            <div className="container">
                
                <div className="main-part">
                    <div id="projects">

                        <div className="project">
                            <div className="project-details">
                                <div className="project-title">
                                    <h2>Issue Tracker</h2>
                                </div>
                                <div className="project-skills"></div>
                                
                            </div>

                        </div>

                        <div className="project">
                            <div className="project-details">
                                <div className="project-title">
                                    <h2>Personal Library</h2>
                                </div>
                                <div className="project-skills"></div>
                                
                            </div>
                        </div>

                        <div className="project">
                            <div className="project-details">
                                <div className="project-title">
                                    <h2>Sudoko Solver</h2>
                                </div>
                                <div className="project-skills"></div>
                                
                            </div>
                        </div>

                        <div className="project">
                            <div className="project-details">
                                <div className="project-title">
                                    <h2>Exercise Tracker</h2>
                                </div>
                                <div className="project-skills"></div>
                                
                            </div>
                        </div>

                        <div className="project">
                            <div className="project-details">
                                <div className="project-title">
                                    <h2>Meme Generator</h2>
                                </div>
                                <div className="project-skills"></div>
                                
                            </div>
                        </div>

                        <div className="project">
                            <div className="project-details">
                                <div className="project-title">
                                    <h2>Unit Convertor</h2>
                                </div>
                                <div className="project-skills"></div>
                                
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App