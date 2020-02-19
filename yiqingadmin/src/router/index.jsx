import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../component/demo";
import SelfReport from "../pages/self/selfreport"
class Routers extends Component {
    render() {
        return <Switch>
            <Route path="/selfreport" component={SelfReport} />
            <Route path="/" component={Home} />
        </Switch>
    }
}

export default Routers