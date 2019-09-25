import React, { Component } from 'react';
import InputForm from './components/InputForm';
import Welcome from './components/Welcome';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store";

class App extends Component {

    render() {
        return (

            <Provider store={store}>
                <Router>
                    <Route exact path="/" component={InputForm} />
                    <Route exact path="/welcome" component={Welcome} />
                </Router>
            </Provider>

        );
    }
}

export default App