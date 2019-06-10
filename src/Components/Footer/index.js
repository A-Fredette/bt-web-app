import React from 'react'
import { Row, Col, Jumbotron } from "react-bootstrap";
import FontAwesome from 'react-fontawesome';
import './footer.scss'

const year = new Date().getFullYear();

const Footer = () => (
    <Jumbotron fluid className={'footer'}>
        <Row>
            <Col>
                <FontAwesome
                    name='instagram'
                    size='2x'
                    tag='a'
                    href='https://www.instagram.com/nomadic_drew/'
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
