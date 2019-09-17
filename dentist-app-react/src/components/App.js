import React, {Component} from 'react';
import InputForm from './InputForm'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        Форма 043/о
                    </h1>
                </div>
                <InputForm/>
            </div>
        );
    }
}

export default App