import React from "react"
import {HashLink} from "react-router-hash-link"

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
                    <div id="projects">

                        <div className="project">
                            <div className="project-details">
                                <div className="project-title">
                                    <h2><a href="https://issue-tracker-masoud.netlify.app" target="blank" className="project-link">Issue Tracker</a></h2>
                                </div>
                                <div className="project-skills">
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>Javascript</p>
                                    <p>React</p>
                                    <p>Node.js</p>
                                    <p>ES6</p>
                                    <p>Express.js</p>
                                    <p>MongoDB</p>
                                </div>
                                
                            </div>

                            <div className="project-code">
                                <a href="https://issue-tracker-masoud.netlify.app" target="blank">Live Website</a>
                                <a href="https://github.com/masoud-mdar/Issue-Tracker" target="blank">Code</a>
                            </div>

                        </div>

                        <div className="project">
                            <div className="project-details">
                                <div className="project-title">
                                    <h2><a href="https://personal-library-masoud.netlify.app" target="blank" className="project-link">Personal Library</a></h2>
                                </div>
                                <div className="project-skills">
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>Javascript</p>
                                    <p>React</p>
                                    <p>Node.js</p>
                                    <p>ES6</p>
                                    <p>Express.js</p>
                                    <p>MongoDB</p>
                                </div>
                                
                            </div>
                            <div className="project-code">
                                <a href="https://personal-library-masoud.netlify.app" target="blank">Live Website</a>
                                <a href="https://github.com/masoud-mdar/Personal-Library" target="blank">Code</a>
                            </div>
                        </div>

                        <div className="project">
                            <div className="project-details">
                                <div className="project-title">
                                    <h2><a href="https://sudoku-solver-masoud.netlify.app" target="blank" className="project-link">Sudoku Solver</a></h2>
                                </div>
                                <div className="project-skills">
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>Javascript</p>
                                    <p>React</p>
                                    <p>Node.js</p>
                                    <p>ES6</p>
                                    <p>Express.js</p>
                                </div>
                                
                            </div>
                            <div className="project-code">
                                <a href="https://sudoku-solver-masoud.netlify.app" target="blank">Live Website</a>
                                <a href="https://github.com/masoud-mdar/Sudoku-Solver" target="blank">Code</a>
                            </div>
                        </div>

                        <div className="project">
                            <div className="project-details">
                                <div className="project-title">
                                    <h2><a href="https://exercise-tracker-msd.netlify.app" target="blank" className="project-link">Exercise Tracker</a></h2>
                                </div>
                                <div className="project-skills">
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>Javascript</p>
                                    <p>React</p>
                                    <p>Node.js</p>
                                    <p>ES6</p>
                                    <p>Express.js</p>
                                    <p>MongoDB</p>
                                    <p>Mongoose</p>
                                </div>
                                
                            </div>
                            <div className="project-code">
                                <a href="https://exercise-tracker-msd.netlify.app" target="blank">Live Website</a>
                                <a href="https://github.com/masoud-mdar/Exercise-Tracker" target="blank">Code</a>
                            </div>
                        </div>

                        <div className="project">
                            <div className="project-details">
                                <div className="project-title">
                                    <h2><a href="https://masoud-mdar.github.io/Meme-Generator" target="blank" className="project-link">Meme Generator</a></h2>
                                </div>
                                <div className="project-skills">
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>Javascript</p>
                                    <p>React</p>
                                    <p>ES6</p>
                                    <p>API</p>

                                </div>
                                
                            </div>
                            <div className="project-code">
                                <a href="https://masoud-mdar.github.io/Meme-Generator" target="blank">Live Website</a>
                                <a href="https://github.com/masoud-mdar/Meme-Generator" target="blank">Code</a>
                            </div>
                        </div>

                        <div className="project">
                            <div className="project-details">
                                <div className="project-title">
                                    <h2><a href="https://metric-imperial-converter.netlify.app" target="blank" className="project-link">Unit Converter</a></h2>
                                </div>
                                <div className="project-skills">
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>Javascript</p>
                                    <p>React</p>
                                    <p>Node.js</p>
                                    <p>ES6</p>
                                    <p>Express.js</p>
                                </div>
                                
                            </div>
                            <div className="project-code">
                                <a href="https://metric-imperial-converter.netlify.app" target="blank">Live Website</a>
                                <a href="https://github.com/masoud-mdar/Metric-Imperial-Converter" target="blank">Code</a>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage