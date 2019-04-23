import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as ROUTES from '../../Constants/routes';
import SignOutButton from '../SignOut';
import { Link } from 'react-router-dom';

//TODO: Remove bg light until scrolling down
const AuthNav = () => (
    <Navbar fixed='top' bg='light' expand="lg">
        <Navbar.Brand href="#home">Better Together</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link className={'nav-link'} to={ROUTES.HOME}>Home</Link>
                <Link className={'nav-link'} to={ROUTES.LANDING}>Landing</Link>
                <Link className={'nav-link'} to={ROUTES.ACCOUNT}>My Account</Link>
                <Link className={'nav-link'} to={ROUTES.WEEKLY_REVIEW}>Weekly Review</Link>
                <SignOutButton />
                <NavDropdown title="Dropdown Example" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

const UnauthNavBar = () => (
    <Navbar fixed='top' bg='light' expand="lg">
        <Navbar.Brand href="#home">Better Together</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link className={'nav-link'} to={ROUTES.HOME}>Home</Link>
                <Link className={'nav-link'} to={ROUTES.LANDING}>Landing</Link>
                <Link className={'nav-link'} to={ROUTES.ACCOUNT}>My Account</Link>
                <Link className={'nav-link'} to={ROUTES.WEEKLY_REVIEW}>Weekly Review</Link>
                <Link className={'nav-link'} to={ROUTES.SIGN_IN}>Sign In</Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

const TopNavigation = ({ authUser }) => (
    <div>{authUser ? <AuthNav /> : <UnauthNavBar />}</div>
);

export default TopNavigation;