import React, {Component} from "react";
import {Route,Redirect} from "react-router-dom";
class AuthorizedRoute extends Component {
    render() {
        const {component:Component} = this.props;
        const isLogged = true;//默认是已经登录状态
        return (
            <Route render={
                props=>{
                    return  isLogged ? <Component {...props} /> : <Redirect to="/login" />
                }
            } />
        )
    }
}

export  default  AuthorizedRoute