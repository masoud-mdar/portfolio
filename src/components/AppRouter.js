import React from "react"
import {Switch, BrowserRouter, Route} from "react-router-dom"
import HomePage from "./HomePage"
import NavBar from "./NavBar"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import NotFound from "./NotFound"
import ScrollButton from "./ScrollButton"

const AppRouter = () => {

    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" component={HomePage} exact={true}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/projects" component={Projects}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route component={NotFound}></Route>

            </Switch>
            <ScrollButton />
        </BrowserRouter>
    )
}

export default AppRouter