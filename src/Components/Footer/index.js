import React from 'react'
import {Row, Col, Jumbotron, Card} from "react-bootstrap";
import FontAwesome from 'react-fontawesome';
import './footer.scss'
import TopNavigation from '../Navbar';

const year = new Date().getFullYear();

const Footer = (props) => (
    <Jumbotron fluid className={'footer'}>
        <Row>
            <TopNavigation authUser={props.authUser}/>
            <p>© {year} BT Collaborative Systems</p>
        </Row>
        <Row>
            <Col>
                <FontAwesome
                    name='instagram'
                    size='2x'
                />
                <FontAwesome
                    name='twitter'
                    size='2x'
                />
                <FontAwesome
                    name='envelope'
                    size='2x'
                />
            </Col>
        </Row>
    </Jumbotron>
);

export default Footer;
