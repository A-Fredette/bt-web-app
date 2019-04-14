import React from 'react';
import './landing.scss'
import PropTypes from 'prop-types';
import Footer from './../Footer';
import FontAwesome from 'react-fontawesome';
import {
    Jumbotron,
    Container,
    Button,
    Card,
    Row,
    Col,
    Image
    }
    from 'react-bootstrap';

const FullWidth = (props) => (
    <Jumbotron {...props.size} className={props.className}>
        <Container className={props.className+'-container'}>
            <h4>{props.heading}</h4>
            <h5>{props.text}</h5>
            { props.buttonText ? <Button variant={props.buttonColor}>{props.buttonText}</Button> : null }
        </Container>
        {props.containedComponent}
    </Jumbotron>
);

FullWidth.defaultProps = {
    size: 'fluid', // pass '' instead of 'fluid' for not full-width
    buttonColor: 'primary',
    heading: 'Heading Here',
    text: 'Text here'
};

FullWidth.propTypes = {
    size: PropTypes.string,
    className: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string,
    buttonColor: PropTypes.string,
    containedComponent: PropTypes.func
};


const QuoteLine = (props) => (
    <Jumbotron fluid style={props.className}>
        <h4>
            {props.quote}
        </h4>
    </Jumbotron>
);

QuoteLine.propTypes = {
    className: PropTypes.string,
    quote: PropTypes.string.isRequired
};

const SingleCard = (props) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
            <Card.Title>{props.heading}</Card.Title>
            <Card.Text>
                {props.text}
            </Card.Text>
            { props.buttonText ? <Button variant="primary">{props.buttonText}</Button> : null }
        </Card.Body>
    </Card>
);

SingleCard.defaultProps = {
  image:'https://via.placeholder.com/150'
};

SingleCard.propTypes = {
    image: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string,
};

const FiftyFifty = (props) => (
    <Row>
        <Col>
            { props.leftImage ? <Image src={props.leftImage} fluid /> : <div>{props.textLeft}</div> }
        </Col>
        <Col>
            { props.rightImage ? <Image src={props.rightImage} fluid /> : <div>{props.textRight}</div> }
        </Col>
    </Row>
);

FiftyFifty.defaultProps = {
    leftImage: 'https://via.placeholder.com/300',
    textRight: 'Your Text Here!'
};

FiftyFifty.propTypes = {
    leftImage: PropTypes.string,
    textLeft: PropTypes.string,
    rightImage: PropTypes.string,
    textRight: PropTypes.string
};

export default class Landing extends React.Component {

    render() {
        return (
            <div className='landingPage'>
                <FontAwesome
                    name='rocket'
                    size='2x'
                    spin
                />
                    <FullWidth
                        className={'heroTop'}
                        heading={'Meet Your Personal Board of Advisers'}
                        text={'Community fueled accountability, support and personal growth.'}
                        buttonText={'Learn More'}
                    />
                <Row>
                    <FullWidth
                        heading={'Hi, I’m Andrew - the founder of the Better Together Mastermind Network\n'}
                        text={'I’m a digital nomad, software engineer and systems architect with the belief that everyone has something to teach. One of my passions is connecting people and building impacting communities that enable personal growth, health and success.'}
                        buttonText={'Meet Me'}
                    />
                </Row>
                <Row>
                    <QuoteLine
                        quote={'"You are the average of the five people you spend the most time with." - Jim Rohn'}
                    />
                </Row>
                <Row>
                    <Col>
                        <SingleCard
                            heading={'Accountability Chain'}
                            text={'Imagine what you could get done with an inspired group of people keeping you focused. Members are plugged into our Accountability Chain for that crucial external accountability.'}
                            buttonText={'Optional Button'}
                        />
                    </Col>
                    <Col>
                        <SingleCard
                            heading={'Data Driven'}
                            text={'Track your performance with our weekly review and monthly reports. Experiment with new systems and get actionable data feedback.'}
                            buttonText={'Optional Button'}
                        />
                    </Col>
                    <Col>
                        <SingleCard
                            heading={'Expert Coaching'}
                            text={'Benefit from exclusive quarterly meetings and offers with some of the brightest minds in high performance.'}
                            buttonText={'Optional Button'}
                        />
                    </Col>
                </Row>
                <FullWidth
                    heading={'Ready to Accelerate Your Success?'}
                    text={'If you have big dreams but suffer from a lack of structure... if you have specific goals but can\'t seem achieve them... if you know you need more guidance, accountability or motivation... then we are going to change your life.\n' +
                    '\n' +
                    'What most people do when facing these problems is try every new shiny object that comes along. An online course... the book everyone is reading... a new "10 step" fad... and the list goes on. But for most people, none of that works because it\'s missing an essential ingredients: community and accountability.'}
                />
                <FiftyFifty />
                <FullWidth
                    containedComponent={<FiftyFifty />}
                />
                <FullWidth />
                <FullWidth
                    containedComponent={<FullWidth />}
                />
                <Footer />
            </div>
        )
    }
}

export { FullWidth, FiftyFifty, QuoteLine }