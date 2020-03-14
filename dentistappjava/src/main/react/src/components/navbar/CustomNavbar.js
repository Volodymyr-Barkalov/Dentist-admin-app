import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar} from 'react-bootstrap';

class CustomNavbar extends Component {

    render() {
       return <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/form/add">New form</Nav.Link>
                <Nav.Link href="/form/all">List all forms</Nav.Link>
            </Nav>
        </Navbar>
    }
}

export default CustomNavbar