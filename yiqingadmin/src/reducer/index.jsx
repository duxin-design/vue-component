import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import asyncComponent from "../component/asyncComponent";

const Demo = asyncComponent(() => import("../component/demo"));

class Routers extends Component {
    render() {
        return <Switch>
            <Route path="/user" component={Demo}/>
            <Route path="/" component={Demo}/>
        </Switch>
    }
}

export default Routers