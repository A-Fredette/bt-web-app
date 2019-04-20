import React, { Component } from 'react';
import './app.scss';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import WeeklyReview from '../WeeklyReview';
import TopNavigation from '../Navbar';
import Footer from '../Footer';

import * as ROUTES from '../../Constants/routes';

import { withFirebase } from '../Firebase/firebase';

class App extends Component {
    constructor(props) {
        super(props);

        this.state =  {
            authUser: null,
        };
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(
            authUser => {
                authUser
                    ? this.setState({ authUser })
                    : this.setState({ authUser: null });
            },
        );
    }

    // Added to avoid memory leaks from an unnecessary listener
    componentWillUnmount() {
        this.listener();
    }

    render() {
        return(
            <div className="app-container">
                <Router>
                    <TopNavigation authUser={this.state.authUser} />
                    <Route exact path={ROUTES.LANDING} component={LandingPage} />
                    <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                    <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                    <Route path={ROUTES.HOME} component={HomePage} />
                    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                    <Route path={ROUTES.ADMIN} component={AdminPage} />
                    <Route path={ROUTES.WEEKLY_REVIEW} component={WeeklyReview} />
                </Router>
                <Router>
                    <Footer authUser={this.state.authUser} />
                </Router>
            </div>
        )
    }
}

export default withFirebase(App);