import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as ROUTES from '../../Constants/routes';
import { Link } from 'react-router-dom';


//TODO: Remove bg light until scrolling down
// const AuthNav = () => (
//     <Navbar fixed='top' bg='light' expand="lg">
//         <Link to={ROUTES.LANDING}>
//             <Navbar.Brand>Better Together</Navbar.Brand>
//         </Link>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mr-auto">
//                 <Link className={'nav-link'} to={ROUTES.HOME}>Home</Link>
//                 <Link className={'nav-link'} to={ROUTES.LANDING}>Landing</Link>
//                 {/*<Link className={'nav-link'} to={ROUTES.ACCOUNT}>My Account</Link>*/}
//                 <Link className={'nav-link'} to={ROUTES.WEEKLY_REVIEW}>Weekly Review</Link>
//                 <NavDropdown title="Learn More" id="basic-nav-dropdown">
//                     <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>z
//                     <NavDropdown.Item href="#action/3.2">Members</NavDropdown.Item>
//                     <NavDropdown.Item href="#action/3.3">Tools</NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action/3.4">Apply</NavDropdown.Item>
//                 </NavDropdown>
//                 <SignOutButton />
//             </Nav>
//         </Navbar.Collapse>
//     </Navbar>
// );

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
                <Button href='https://forms.gle/ZPepfA9Kh3WdR7Wf6'>Join Us</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
);

const TopNavigation = NavBar;

export default TopNavigation;