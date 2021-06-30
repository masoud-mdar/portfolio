import React from "react"
import {Switch, BrowserRouter, Route} from "react-router-dom"
import HomePage from "./HomePage"

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={HomePage}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter