import React, {Component} from 'react';
import InputForm from './components/inputform/InputForm';
import Welcome from './components/Welcome';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./store";
import FormList from "./components/listforms/FormList";

class App extends Component {

    render() {
        return (

            <Provider store={store}>
                <Router>
                    <Route exact path="/form/add" component={InputForm} />
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/form/showall" component={FormList} />
                </Router>
            </Provider>

        );
    }
}

export default App