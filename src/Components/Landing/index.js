import React from 'react';
import './landing.scss'
import PropTypes from 'prop-types';
import {
    Jumbotron,
    Container,
    Button
}
    from 'react-bootstrap';

const HeroImage = () => (
    <Jumbotron fluid>
        <Container>
            <h1>Meet Your Personal Board of Advisers</h1>
            <h4>
                Community fueled accountability, support and personal growth.
            </h4>
            <Button variant="primary">Learn more</Button>
        </Container>
    </Jumbotron>
);

const Intro = () => (
    <Jumbotron fluid>
        <Container>
            <h4>Hi, I’m Andrew - the founder of the Better Together Mastermind Network</h4>
            <h4>
                I’m a digital nomad, software engineer and systems architect with the belief that everyone has something to teach.
                One of my passions is connecting people and building impacting communities that enable personal growth, health and success.
            </h4>
            <Button variant="primary">Read More About Me</Button>
        </Container>
    </Jumbotron>
);

const Quoter = (props) => (
    <Jumbotron fluid>
        <h4>
            {props.quote}
        </h4>
    </Jumbotron>
);

export default class Landing extends React.Component {
    render() {
        return (
            <div>
                <HeroImage/>
                <Intro/>
                <Quoter
                    quote={'"You are the average of the five people you spend the most time with." - Jim Rohn'}/>
            </div>
        )
    }
}

Quoter.propTypes = {
    quote: PropTypes.string
};
