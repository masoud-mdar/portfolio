import React from "react"
import {Switch, BrowserRouter, Route} from "react-router-dom"
import HomePage from "./HomePage"
import ScrollButton from "./ScrollButton"

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={HomePage}></Route>
            </Switch>
            <ScrollButton />
        </BrowserRouter>
    )
}

export default AppRouter