import React from "react"
import ReactDOM from "react-dom"

//import HomePage from "./HomePage"
import AppRouter from "./components/AppRouter"

import "./styles.css"
import "./styles/navbar.css"
import "./styles/top.css"
import "./styles/mainAndProjects.css"
import "./styles/topButton.css"
import "./styles/about.css"
import "./styles/contact.css"

ReactDOM.render(<AppRouter />, document.getElementById("root"))