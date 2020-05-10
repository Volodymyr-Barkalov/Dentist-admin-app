import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'

class CustomNavbar extends Component {

    render() {
       return <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/form/add" className="nav-link">New form</Link>
                <Link to="/form/showall" className="nav-link">List all forms</Link>
            </Nav>
        </Navbar>
    }
}

export default CustomNavbar