import React, { Component } from 'react';
import { Provider } from "react-redux";
import { Router } from "./router/router";
import store from "./store";
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App;
