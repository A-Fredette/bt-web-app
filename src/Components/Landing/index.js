import React from 'react';
import './landing.scss'
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import {
    Jumbotron,
    Container,
    Button,
    Card,
    Row,
    Col,
    Image,
    CardDeck
    }
    from 'react-bootstrap';
import dawn from '../../Assets/images/dawn.jpg'
// import mlk from '../../Assets/images/seenTheMountainTop.jpg'
import furiosa from '../../Assets/images/furiosa.jpg'
import sarah from '../../Assets/images/sarah.png'
import dashboardExample from '../../Assets/images/dashboardExample.png'
// import refugees from '../../Assets/images/refugees.jpg'
import smile from '../../Assets/images/smile.jpg'
import * as ROUTES from '../../Constants/routes';
import { Link } from 'react-router-dom';


const FullWidth = (props) => (
    <Jumbotron className={props.className}>
        <Container className={props.className+'-container'}>
            <h4 className={'heading'}>{props.heading}</h4>
            <p className={'fullwidth-text'}>{props.text}</p>
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
    containedComponent: PropTypes.any,
    // containedComponent: PropTypes.func TODO: Check prop type is a Component
};

const QuoteLine = (props) => (
    <Jumbotron fluid className={props.className} style={{backgroundColor: props.backgroundColor}}>
        <h4>
            {props.quote}
        </h4>
    </Jumbotron>
);

QuoteLine.defaultProps = {
  backgroundColor: '#3498db'
};

QuoteLine.propTypes = {
    className: PropTypes.string,
    backgroundColor: PropTypes.string,
    quote: PropTypes.string.isRequired
};

const SingleCard = (props) => (
    <Card className={props.cardClassName} style={{ width: '16rem' }}>
        {/*<Card.Img variant="top" src={props.image} className={props.imgClassName}/>*/}
        <FontAwesome
            name={props.fontAwesome}
            size='2x'
            // spin
        />
        <Card.Body>
            <Card.Title>{props.heading}</Card.Title>
            <Card.Text>
                {props.text}
            </Card.Text>
            { props.buttonText ? <Button className='card-button' href={props.link}>{props.buttonText}</Button> : null }
        </Card.Body>
    </Card>
);

SingleCard.defaultProps = {
   fontAwesome:'chart-bar'
};

SingleCard.propTypes = {
    cardClassName: PropTypes.string,
    fontAwesome: PropTypes.string,
    image: PropTypes.string,
    imgClassName: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string,
};

const FiftyFifty = (props) => (
    <Row className={'fiftyfifty'}>
        <Col>
            { props.leftImage ?
                <Image className={'fiftyImage'} src={props.leftImage} fluid />
                :
                <Container>
                    <h4 className={'heading'} >{props.headingLeft}</h4>
                    <div className={'fiftyText'}>{props.textLeft}</div>
                </Container>
            }
        </Col>
        <Col>
            { props.rightImage ?
                <Image className={'fiftyImage'} src={props.rightImage} fluid />
                :
                <Container>
                    <h4 className={'heading'}>{props.headingRight}</h4>
                    <div className={'fiftyText'}>{props.textRight}</div>
                </Container>
            }
        </Col>
    </Row>
);

FiftyFifty.defaultProps = {
    textRight: 'Your Text Here!'
};

FiftyFifty.propTypes = {
    leftImage: PropTypes.string,
    textLeft: PropTypes.string,
    rightImage: PropTypes.string,
    textRight: PropTypes.string,
    headingRight: PropTypes.string,
    headingLeft: PropTypes.string,
    fiftyImage: PropTypes.string,
    fiftyfifty: PropTypes.string,
};

const Testimonial = (props) => (
    <Card className={props.cardClassName} style={{ width: '30rem' }}>
        <Card.Img variant="top" src={props.image} className={props.imgClassName}/>
        <Card.Body>
            <Card.Title>{props.heading}</Card.Title>
            <Card.Text>
                {props.text}
            </Card.Text>
            { props.buttonText ? <Button variant="primary">{props.buttonText}</Button> : null }
            <footer className="blockquote-footer">
                {props.source}
            </footer>
            <Card.Link href={props.link}>{props.linkText}</Card.Link>
        </Card.Body>
    </Card>
);

Testimonial.propTypes = {
    cardClassName: PropTypes.string,
    image: PropTypes.string,
    imgClassName: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string,
    source: PropTypes.string,
    linkText: PropTypes.string,
};

export default class Landing extends React.Component {
    render() {
        return (
            <div className='landingPage'>
                <FullWidth
                    className={'heroTop'}
                    heading={'Genuine Connection. Routine Accountability. \n' +
                    'Your Personal Board of Advisers.'}
                    text={'The modern mastermind network for remote workers and entrepreneurs.'}
                />
                <Row className='card-row'>
                    <Col>
                        {/*<Row className='justify-content-md-center'>*/}
                        {/*        <h3>Complete Support for Your Dream</h3>*/}
                        {/*</Row>*/}
                        <CardDeck className={'card-deck'}>
                            <SingleCard
                                fontAwesome={'users'}
                                heading={'Find Your Tribe'}
                                text={"It's difficult finding people that inspire you. Let us connect you with people as driven as you. Facilitated weekly meetings with your tribe for crowd-sourcing wisdom, setting goals and accountability."}
                                buttonText={'Learn More ->'}
                                link={'#tibe'}
                            />
                            <SingleCard
                                fontAwesome={'link'}
                                heading={'Real Accountability'}
                                text={'Leverage accountability in our proven system to supercharge productivity on the  things that matter most. Imagine what you can get done with an entire team holding you accountable to your dreams.'}
                                buttonText={'Learn More ->'}
                                link={'#accounting'}
                            />
                            <SingleCard
                                imgClassName={'data-card'}
                                heading={'Data Driven'}
                                text={'Use our tools to set goals and track your performance each week. Measure key areas such as physical health, mindfulness, courage & clarity. Use this data to gain key insights into your behavior patterns over the long term.'}
                                buttonText={'Learn More ->'}
                            />
                        </CardDeck>
                    </Col>
                </Row>
                <Jumbotron className='main-points accounting'>
                    <Row>
                        <Col lg='2' className='icon'>
                        <FontAwesome
                            name='link'
                            size='2x'
                        />
                    </Col>
                        <Col id='accounting' lg='6'>
                            <h3>Leverage Accountability</h3>
                            <h6>For what REALLY matters</h6>
                            <p>Why do we always get stuff done for a tough boss, often even at the expense of our own health and dreams? The boss holds you accountable with real consequences.</p>
                            <p>But a boss won't hold you to your dreams. A boss won't make sure you're writing the book, building the business or creating the art that's in your heart. That's where your tribe comes in.</p>
                            <p>Each week, we set goals around the things that matter most to us. We report to our tribe about what we've gotten done and what targets we failed to hit.</p>
                            <p>We create real consequences by assigning a money amount to each goal. If you miss a goal, you have to answer to the tribe and donate that money to charity.</p>
                            <p>The future of the economy is self-employment. It's time to create new models of accountability.</p>
                        </Col>
                        <Col lg='4'>
                            <Card bg='light'>
                                {/*<Card.Img src="holder.js/100px270" alt="Card image" />*/}
                                <Card.Body className='charity-card-body'>
                                    <Card.Img variant="top" src={smile}/>
                                    <Card.Title>Total Missed Goal Donations</Card.Title>
                                    <Card.Text className='charity-amount'>
                                        $1000
                                    </Card.Text>
                                    <Card.Link href="http://www.givedirectly.com">100% of Missed Goal Donations Support the Refugee Crisis</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Jumbotron>
                <QuoteLine
                    className={'quoteLine'}
                    backgroundColor={'#56B1BF'}
                    quote={'"You are the average of the five people you spend the most time with." - Jim Rohn'}
                />
                <Jumbotron className='main-points data-driven'>
                    <Row>
                        <Col lg='2' className='icon'>
                            <FontAwesome
                                name='chart-bar'
                                size='2x'
                            />
                        </Col>
                        <Col lg='6'>
                            <h3>Data Driven Insights into You</h3>
                            <h6>Take the 'woo' out of personal development</h6>
                            <p>Use our tools to rate your performance each week in key areas of life, including: focus, clarity, mindfulness, courage, productivity & energy. This data is presented in your performance dashboard - giving you key insights into the relationship between different aspects of life.</p>
                            <p>Over the long term, this data give us valuable insights into our behavior patterns. Curious about the relationship between exercise and productivity? Diet and mental clarity? So are we.</p>
                            <Button href='https://datastudio.google.com/s/oIx13t87wMc' target='_blank'>Example Dashboard</Button>
                        </Col>
                        <Col lg='4'>
                            <Image src={dashboardExample} thumbnail />
                        </Col>
                    </Row>
                </Jumbotron>
                <QuoteLine
                    className={'quoteLine'}
                    quote={'"What gets measured, gets managed." - Peter Drucker'}
                />
                <Jumbotron className='main-points accounting'>
                    <Row>
                        <Col lg='2' className='icon'>
                            <FontAwesome
                                name='users'
                                size='2x'
                            />
                        </Col>
                        <Col lg='9'>
                            <h3>Find Your Tribe</h3>
                            <h6>Crowd source your success</h6>
                            <p>The economy is changing. There's more remote workers, freelancers and entrepreneurs than ever before. This means we're more empowered... but also more isolated.</p>
                            <p>Your tribe is a group of people that share your struggles, dreams and values. They are a source of inspiration, information and best practices. They are your personal board of advisers.</p>
                            <p>Someone's insight can save weeks or months of trying to figure out something on your own. Community is everything - including a strong predictor of health and success. Develop genuine relationships with a tribe of people that share your ambitions and are invested in your success.</p>
                            <Button href='https://forms.gle/ZPepfA9Kh3WdR7Wf6'>Apply Now</Button>
                        </Col>
                    </Row>
                </Jumbotron>
                <QuoteLine
                    className={'quoteLine'}
                    backgroundColor={'#08708A'}
                    quote={'Collaboration is the new competition.'}
                />
                <Jumbotron className='steps'>
                    <h1>We're Better Together</h1>
                    <Row className='steps-row'>
                        <Col lg='2'>
                            <h1>1.</h1>
                        </Col>
                        <Col lg='2'>
                            <h2>Apply & get matched with your tribe.</h2>
                        </Col>
                        <Col lg='2'>
                            <h1>2.</h1>
                        </Col>
                        <Col lg='2'>
                            <h2>Meet weekly in a curated small group.</h2>
                        </Col>
                        <Col lg='2'>
                            <h1>3.</h1>
                        </Col>
                        <Col lg='2'>
                            <h2>Track your progress using our tools.</h2>
                        </Col>
                    </Row>
                </Jumbotron>
                <Row className={'testimonials'}>
                    <h2 className={'heading'}>Member Testimonials</h2>
                    <CardDeck className='testimonial-cardDeck'>
                        <Col lg ='6'>
                            <Testimonial
                                cardClassName={'testimonialCard'}
                                heading={'Author & Podcaster Extraordinaire'}
                                image={furiosa}
                                text={'“I’ve never felt so much clarity, consistency, and direction both creatively and professionally. Joining the Mastermind has made life go by slower because I use time more efficiently. With a weekly board of advisers to guide my entrepreneurial endeavors, I’m seeing a wealth of growth and learning and even entrepreneurial success with my progress. This isn’t just an investment, it’s a road map to fulfillment.”'}
                                source={'Quin, Host of Mania Podcast'}
                                linkText={'Learn more about Quin'}
                                link={"http://harlequingrim.com/"}
                            />
                        </Col>
                        <Col lg='6'>
                            <Testimonial
                                cardClassName={'testimonialCard'}
                                heading={'Yoga Instructor & Videographer'}
                                image={sarah}
                                text={'“I’ve never felt so much clarity, consistency, and direction both creatively and professionally. Joining the Mastermind has made life go by slower because I use time more efficiently. With a weekly board of advisers to guide my entrepreneurial endeavors, I’m seeing a wealth of growth and learning and even entrepreneurial success with my progress. This isn’t just an investment, it’s a road map to fulfillment.”'}
                                source={'Sarah, Yogi & Videographer'}
                                linkText={'Learn more about Sarah'}
                            />
                        </Col>
                    </CardDeck>
                </Row>
                <Jumbotron>
                    <Card className='testimonial-card' style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={dawn} className='testimonial-image'/>
                        <Card.Body>
                            <Card.Title>Join Us</Card.Title>
                            <Card.Text>
                                <p>Membership dues are $75 / month.</p>
                                <p>Members are chosen selectively after an application and interview.</p>
                                <p>Read about our values <Link to={ROUTES.VALUES}>here.</Link></p>
                            </Card.Text>
                            <Button className='application-button' href='https://forms.gle/ZPepfA9Kh3WdR7Wf6'>Apply Now</Button>
                            <p>No one will be turned away for lack of money.</p>
                        </Card.Body>
                    </Card>
                </Jumbotron>
            </div>
        )
    }
}

export { FullWidth, FiftyFifty, QuoteLine, Testimonial }