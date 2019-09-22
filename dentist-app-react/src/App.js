import React, { Component } from 'react';
import InputForm from './components/InputForm';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store";

class App extends Component {

    render() {
        return (

            <Provider store={store}>
                <Router>
                    <div className="container">
                        <div className="jumbotron">
                            <h3 className="display-3">
                                Форма 043/о
                            </h3>
                        </div>
                        <Route exact path="/" component={InputForm} />
                    </div>
                </Router>
            </Provider>

        );
    }
}

export default App