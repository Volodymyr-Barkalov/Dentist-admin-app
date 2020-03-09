import React, {Component} from 'react';
import CustomNavbar from "./navbar/CustomNavbar";

class Welcome extends Component {
    render() {
        return (
            <div className="container">
                <CustomNavbar/>
                <div className="jumbotron">
                   <h3 className="display-3">
                        Hello!!!
                       This is dentist app for creating form 43/o
                   </h3>
                </div>
            </div>
        );
    }
}

export default Welcome;