import React from 'react';
import './founder.scss';
import Jumbotron from "react-bootstrap/Jumbotron";

export default class Founder extends React.Component {
    render() {
        return (
            <Jumbotron className='why'>
                <h4>Hi, I’m Andrew - the founder of the Better Together Mastermind Network</h4>

                <p>I’m a digital nomad, software developer and passionate student of life. I am a human-connector with a systems architect mentality with the belief that everyone has something to teach. One of my passions is connecting people and building impactful communities that enable personal growth, health and success. My mission is to bring community and accountability to thousands of people while reducing the feeling of isolation that is plaguing our digital economy.</p>

                <p>Developing systems that foster genuine connection, (unlike the often shallow communities of social media), is extremely important for the future. More and more people are expected to transition into remote work and entrepreneurship in the coming years, spurned by the growth of technologies such as artificial intelligence. These are exciting trends suggesting that the individual is becoming more empowered. However, this empowerment often comes at the price of a greater feeling of isolation.</p>

                <p>My job is to create a large community network composed of specialized mastermind group nodes, that makes genuine connection and routine accountability easily accessible. BT uses an exclusive system and set of tools built around the mastermind model, informed by the quantified self movement and latest research in psychology and personal development. I lean on my software engineering, entrepreneurial and social science research to create the tools to serve our community and develop this project.</p>
            </Jumbotron>
        )
    }
}