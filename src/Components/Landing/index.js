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
import mlk from '../../Assets/images/seenTheMountainTop.jpg'
import furiosa from '../../Assets/images/furiosa.jpg'
import sarah from '../../Assets/images/sarah.png'
import dashboardExample from '../../Assets/images/dashboardExample.png'


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
    <Card className={props.cardClassName} style={{ width: '18rem' }}>
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
            { props.buttonText ? <Button variant="primary">{props.buttonText}</Button> : null }
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
            <Card.Link href="#">{props.linkText}</Card.Link>
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
                    heading={'Your Personal Board of Advisers'}
                    text={'Accelerate your dreams with community-based accountability, support and personal growth.'}
                />
                <Jumbotron className='main-points'>
                    <Row>
                        <Col lg='2' className='icon'>
                        <FontAwesome
                            name='link'
                            size='2x'
                        />
                    </Col>
                        <Col lg='6'>
                            <h3>Get Accountability</h3>
                            <p>Studies show that accountability is the most important component of productivity. Set your goals weekly with your group and assign each goal a dollar value that works for you. If you don't hit your goal, that money is donated to charity. Do good by doing bad by leveraging the latest research in reward systems.</p>
                        </Col>
                        <Col lg='4'>
                            <Card bg='light'>
                                {/*<Card.Img src="holder.js/100px270" alt="Card image" />*/}
                                <Card.Body className='charity-card-body'>
                                    <Card.Title>Total Missed Goal Donations</Card.Title>
                                    <Card.Text className='charity-amount'>
                                        $1000
                                    </Card.Text>
                                    <Card.Link href="#">Learn more who we support</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='2' className='icon'>
                            <FontAwesome
                                name='chart-bar'
                                size='2x'
                            />
                        </Col>
                        <Col lg='6'>
                            <h3>Data Driven</h3>
                            <h6>Take the 'woo' out of personal development</h6>
                            <p>Each member has a Performance Dashboard that tracks their performance in key categories week to week. By completing a weekly review, we track our focus, clarity, accountability, mindfulness, courage productivity & energy. By looking at this data over the long term, we gain valuable insights into our behavior patterns.</p>
                            <Button>Example Dashboard</Button>
                        </Col>
                        <Col lg='4'>
                            <Image src={dashboardExample} thumbnail />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='2' className='icon'>
                            <FontAwesome
                                name='users'
                                size='2x'
                            />
                        </Col>
                        <Col lg='9'>
                            <h3>Find Your Tribe</h3>
                            <h6>Crowd Source Your Dreams</h6>
                            <p>With the rise of freelancers, remote workers and soloprenuers, we're more isolated than ever. Find a group of people that share your dreams and values that you can share your insights, struggles and victories with. One person's insights can save you weeks or months of trying to figure out something on your own. Community is everything.</p>
                            <Button>Apply Today</Button>
                        </Col>
                    </Row>
                </Jumbotron>
                <Jumbotron className='steps'>
                    <h1>How it Works</h1>
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
                {/*<Row className={'card-row'}>*/}
                {/*    <Col>*/}
                {/*    <CardDeck className={'card-deck'}>*/}
                {/*        <SingleCard*/}
                {/*            fontAwesome={'link'}*/}
                {/*            heading={'Accountability Chain'}*/}
                {/*            text={'Imagine what you could get done with an inspired group of people keeping you focused. Members are plugged into our Accountability Chain for that crucial external accountability.'}*/}
                {/*            buttonText={'Learn More'}*/}
                {/*        />*/}
                {/*        <SingleCard*/}
                {/*            imgClassName={'data-card'}*/}
                {/*            heading={'Data Driven'}*/}
                {/*            text={'Track your performance with our weekly review and monthly reports. Experiment with new systems and get actionable data feedback.'}*/}
                {/*            buttonText={'Learn More'}*/}
                {/*        />*/}
                {/*        <SingleCard*/}
                {/*            fontAwesome={'users'}*/}
                {/*            heading={'Find Your Tribe!'}*/}
                {/*            text={'Build supporting relationships and communities with the people that share your dream, whatever that dream might be.'}*/}
                {/*            buttonText={'Learn More'}*/}
                {/*        />*/}
                {/*    </CardDeck>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                <QuoteLine
                    className={'quoteLine'}
                    quote={'"You are the average of the five people you spend the most time with." - Jim Rohn'}
                />
                <FullWidth
                    className={'success'}
                    heading={'Ready to Accelerate Your Success?'}
                    text={'If you have big dreams but suffer from a lack of structure... if you have specific goals but can\'t seem achieve them... if you know you need more guidance, accountability or motivation... then we are going to change your life.\n' +
                    '\n' +
                    'What most people do when facing these problems is try every new shiny object that comes along. An online course... the book everyone is reading... a new "10 step" fad... and the list goes on. But for most people, none of that works because it\'s missing an essential ingredients: community and accountability.'}
                />
                <Row className={'fiftyfifty'}>
                    <Col>
                        <Container>
                            <h4 className={'heading'}>Collaboration is the New Competition</h4>
                            <br />
                            <div className={'fiftyText'}>
                                <p>We helps members get and stay unstuck by providing community, coaching and accountability that sparks transformation growth.</p>
                                <br />
                                <p>Our members and guest coaches take an active interest in each others' lives, careers and goals. Members benefit from the knowledge of the group and the open exchange of business and personal development expertise.</p>
                            </div>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <Image className={'fiftyImage'} src={dawn} />
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Jumbotron className={'support'}>
                            <Container className={'support-container'}>
                                <h4 className={'heading'}>Imagine What You Would Accomplish with Enough Support.</h4>
                                <p className={'fullwidth-text'}>
                                    How would your life change if you had a group of like-minded individuals that you could turn to on a daily basis? Would you feel less stressed? Would you be more effective, energized and inspired?</p>
                                    <br />
                                    <p>We help bring focus and clarity to members' lives so they can become better people, professionals, entrepreneurs, parents and partners. We listen to each others' challenges and opportunities. We work together to identify and eliminate what's holding you back and provide fresh insights to help you achieve your goals.
                                </p>
                            </Container>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row className={['fiftyfifty', 'mountain']}>
                    <Col lg={6}>
                        <Container>
                            <Image className={'fiftyImage'} src={mlk} />
                        </Container>
                    </Col>
                    <Col>
                        <Container className={'text-container'}>
                            <h4 className={'heading'}>Our Accountability Tools</h4>
                            <br />
                            <div className={'fiftyText'}>
                                <ul>
                                    <li>Weekly mastermind calls</li>
                                    <li>Active Slack channel</li>
                                    <li>Annual in person retreat</li>
                                    <li>Set weekly goals and review your previous week</li>
                                    <li>Goals are posted and tracked</li>
                                    <li>Exercises to help you get focused</li>
                                </ul>
                            </div>
                        </Container>
                    </Col>
                </Row>
                <FullWidth
                    className={'network'}
                    heading={'High Performance Coaching Network'}
                    text={'Each of our members can provide valuable perspectives and insights, but we want to also stand on the shoulder of giants for particular topics. \n' +
                    '\n' +
                    'Each month, we identify an area that would have the most impact on the group. We then search for an expert on that topic and invite them to speak to our mastermind. Not only will you learn from the amazing members in our group, but also personal development and business experts with years of experience in a particular field.\n' +
                    '\n' +
                    'See our previous guest coaches and our planned upcoming coaches.'}
                />
                <FullWidth
                    className={'data'}
                    heading={'Let Data Guide Your Growth'}
                    text={'We believe in the power of data. As a member, you will track key personal metrics such as happiness, productivity and distraction. By measuring these data points over time, you will gain new insights and will be able to make smarter decisions about where to focus your attention. \n' +
                    '\n' +
                    'We also leverage this data to determine the mastermind\'s opportunities for growth. This information is used to bring in expert coaches that will help us collectively get to the next level.\n' +
                    '\n'}
                    containedComponent={<FullWidth
                        className={'data-2'}
                        heading={'Harness the Power of Data'}
                        text={'Use our tool to complete weekly reflections\n' +
                        'Record key personal stats such as feelings of joy, purpose and productivity\n' +
                        'Access graphs that show your long term trends\n' +
                        'Use these insights to take targeted actions to improve your performance\n'}
                    />}
                />
                <Row className={'card-row'}>
                    <h4 className={'heading'}>What Our Members Are Saying</h4>
                    <CardDeck>
                        <Col lg ='6'>
                            <Testimonial
                                cardClassName={'testimonialCard'}
                                heading={'Author & Podcaster Extraordinaire'}
                                image={furiosa}
                                text={'“I’ve never felt so much clarity, consistency, and direction both creatively and professionally. Joining the Mastermind has made life go by slower because I use time more efficiently. With a weekly board of advisers to guide my entrepreneurial endeavors, I’m seeing a wealth of growth and learning and even entrepreneurial success with my progress. This isn’t just an investment, it’s a road map to fulfillment.”'}
                                source={'Quin, Host of Mania Podcast'}
                                linkText={'Learn more about Quin'}
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
            </div>
        )
    }
}

export { FullWidth, FiftyFifty, QuoteLine, Testimonial }