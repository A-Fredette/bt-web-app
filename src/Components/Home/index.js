import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";

const Home = () => (
    <Form>
        <fieldset>
            <Form.Group  controlId="formHorizontalEmail">
                <Col sm={5}>
                    <Form.Label>Test</Form.Label>
                </Col>
                <Col sm={5}>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Email"
                    />
                </Col>
            </Form.Group>
        </fieldset>
    </Form>
);

export default Home;