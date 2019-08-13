import React from 'react';
import './apply.scss';
import Jumbotron from "react-bootstrap/Jumbotron";

export default class Application extends React.Component {
    render() {
        return (
            <Jumbotron className={'application'}>
                <div className={'form-container'} id='application'>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSe9TtyQ7TWl8Z1T8bk0I-JuLkEF2gRKC3osovOiKk6jTCatWw/viewform?embedded=true"
                        width="640" height="920" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
                    </iframe>
                </div>
            </Jumbotron>
        )
    }
}