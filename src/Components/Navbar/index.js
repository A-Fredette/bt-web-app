import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as ROUTES from '../../Constants/routes';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <Navbar fixed='top' bg='light' expand="lg">
        <Link to={ROUTES.LANDING}>
            <Navbar.Brand>Better Together</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link className={'nav-link'} to={ROUTES.LANDING}>Home</Link>
                <Link className={'nav-link'} to={ROUTES.WHY}>Why This Project?</Link>
                <Link className={'nav-link'} to={ROUTES.VALUES}>Our Values</Link>
                <Link className={'nav-link'} to={ROUTES.APPLY}>Application</Link>
                {/*<Link className={'nav-link'} to={ROUTES.FOUNDER}>Founder</Link>*/}
                {/*<Link className={'nav-link'} to={ROUTES.ACCOUNT}>My Account</Link>*/}
                {/*<Link className={'nav-link'} to={ROUTES.WEEKLY_REVIEW}>Weekly Review</Link>*/}
                {/*<Link className={'nav-link'} to={ROUTES.SIGN_IN}>Sign In</Link>*/}
                {/*<NavDropdown title="Learn More" id="basic-nav-dropdown">*/}
                {/*    <NavDropdown.Item>*/}
                {/*        <Link className={'nav-link'} to={ROUTES.ABOUT}>Our Values</Link>*/}
                {/*    </NavDropdown.Item>*/}
                {/*    <NavDropdown.Item>*/}
                {/*         <Link className={'nav-link'} to={ROUTES.ABOUT}>Founder</Link>*/}
                {/*    </NavDropdown.Item>*/}
                {/*</NavDropdown>*/}
            </Nav>
            <Form inline>
                <Link to={ROUTES.APPLY}>
                    <Button>Join Us</Button>
                </Link>
            </Form>
        </Navbar.Collapse>
    </Navbar>
);

const TopNavigation = NavBar;

export default TopNavigation;