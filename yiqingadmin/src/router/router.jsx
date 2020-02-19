import React from "react";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import asyncComponent from "../component/asyncComponent";
import AuthorizedRoute from "./AuthorizedRoute";
import Home from "../pages/home"
// const Home = asyncComponent(() => import("../pages/home/"));
const Login = asyncComponent(() => import("../pages/login/"));

export const Router = () => (
    <HashRouter>
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <AuthorizedRoute path="/" component={Home} />
            <Redirect from="/" exact to="/login" />
        </Switch>
    </HashRouter>
)