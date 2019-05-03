import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//import { compose } from 'recompose';
import './weeklyreview.scss'
import firebase from 'firebase';
import { withFirebase } from "../Firebase/firebase";

const survey = {
    values: ["1 - Completely False", 2, 3, 4, "5 - Completely True"],
    questions: [
        {   topic: 'energy',
            key: 1,
            type: 'radio',
            label: 'I had enough energy to do the things that I needed to do this week.',
            values: ["1 - Completely False", 2, 3, 4, "5 - Completely True"]
        },
        {   topic: 'happy',
            key: 2,
            type: 'radio',
            label: 'I was generally happy and optimistic.',
            values: ["1 - Completely False", 2, 3, 4, "5 - Completely True"]
        },
        {   topic: 'exercise',
            key: 3,
            type: 'radio',
            label: 'How many times did you exercise in the last week?',
            values: ["1 - Completely False", 2, 3, 4, "5 - Completely True"]
        },
        {   topic: 'sleep',
            key: 4,
            type: 'radio',
            label: 'I got enough (~7.5 hours/night) sleep this week',
            values: ["1 - Completely False", 2, 3, 4, "5 - Completely True"]
        },
        {   topic: 'best',
            key: 5,
            type: 'radio',
            label: 'This week, I knew exactly who my "best self" is and how they act.',
            values: ["1 - Completely False", 2, 3, 4, "5 - Completely True"]
        },
        {   topic: 'diet',
            key: 6,
            type: 'radio',
            label: 'My diet was healthy this week.',
            values: ["1 - Completely False", 2, 3, 4, "5 - Completely True"]
        },
        {   topic: 'responsibility',
            key: 7,
            type: 'radio',
            label: 'I felt a deep responsibility to perform my best for my friends, family, society or higher ideal.',
            values: ["1 - Completely False", 2, 3, 4, "5 - Completely True"]
        },
        {   topic: 'deadlines',
            key: 8,
            type: 'radio',
            label: 'I had deadlines for tasks in my primary field of interest with real consequences.',
            values: ["1 - Completely False", 2, 3, 4, "5 - Completely True"]
        },
        {   topic: 'presence',
            key: 9,
            type: 'radio',
            label: 'When strong emotions or demanding situations occurred, I was able to stay present without becoming too reactive.',
            values: ["1 - Completely False", 2, 3, 4, "5 - Completely True"]
        },
        {   topic: 'dreams',
            key: 10,
            type: 'radio',
            label: 'I easily voiced my true desires and dreams to others, even when it was uncomfortable.',
            values: ["1 - Completely False", 2, 3, 4, "5 - Completely True"]
        },
        {   topic: 'comfort-zone',
            key: 11,
            type: 'radio',
            label: 'I intentionally engaged in activities that challenged my comfort zone.',
            values: ["1 - Completely False", 2, 3, 4, "5 - Completely True"]
        },
        {   topic: 'goals',
            key: 12,
            type: 'radio',
            label: 'I focused on my 1-3 top goals for the week without being distracted.',
            values: ["1 - Completely False", 2, 3, 4, "5 - Completely True"]
        },
    ]
};

const INITIAL_STATE = {
    email: ''
};

class WeeklyReview extends React.Component {

    constructor(props) {
        super(props);

        this.state =  {...INITIAL_STATE}
        };


    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.props);
        this.props.firebase.doSignOut();

        // const itemsRef = this.props.firebase.database().ref('items');
        // const item = {
        //     email: this.state.email,
        // }
        // itemsRef.push(item);
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state)
    };


    render() {
        return (
            <Form>
                <fieldset>
                    <Form.Group  controlId="formHorizontalEmail">
                        <Col sm={5}>
                            <Form.Label>Email</Form.Label>
                        </Col>
                        <Col sm={5}>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Email"
                                onChange={this.onChange}
                            />
                        </Col>
                    </Form.Group>

                    {survey.questions.map(question => (
                        <Form.Group
                            controlId={`${question.topic}`}
                            key={`${question.topic}`}
                        >
                            <Col sm={12}>
                                <Form.Label>{`${question.label}`}</Form.Label>
                            </Col>
                            <Col sm={12}>
                                {question.values.map(rating => (
                                    <Form.Check
                                        // inline
                                        label={`${rating}`}
                                        name={`${question.topic}`}
                                        type={`${question.type}`}
                                        id={`${question.topic}-${rating}`}
                                        key={`${question.topic}-${rating}`}
                                    />
                                ))}
                            </Col>
                        </Form.Group>
                    ))}
                </fieldset>
                <Button variant="primary" type="submit" onClick={this.onSubmit}>
                    Submit
                </Button>
            </Form>
        )
    }
};

export default withFirebase(WeeklyReview);
