import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import HomePage from './components/pages/HomePage'


const MainRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainRouter
