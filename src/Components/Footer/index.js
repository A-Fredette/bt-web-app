import React from 'react'
import { Row, Col, Jumbotron } from "react-bootstrap";
import FontAwesome from 'react-fontawesome';
import './footer.scss'
import TopNavigation from '../Navbar';

const year = new Date().getFullYear();

const Footer = () => (
    <Jumbotron fluid className={'footer'}>
        <Row>
            <Col>
                <FontAwesome
                    name='instagram'
                    size='2x'
                    tag='a'
                    href='www.instagram.com'
                />
                <FontAwesome
                    name='twitter'
                    size='2x'
                    tag='a'
                    href='www.twitter.com'
                />
                <FontAwesome
                    name='envelope'
                    size='2x'
                    tag='a'
                    href='mailto:andrew@bettertogethermm.com'
                />
            </Col>
        </Row>
        <Row className={'copyright'}>
            <p>© {year} BT Collaborative Systems</p>
        </Row>
    </Jumbotron>
);

export default Footer;
