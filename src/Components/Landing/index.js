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
    CardDeck,
    Accordion
    }
    from 'react-bootstrap';
import dawn from '../../Assets/images/dawn.jpg'
// import mlk from '../../Assets/images/seenTheMountainTop.jpg'
import furiosa from '../../Assets/images/furiosa.jpg'
import sarah from '../../Assets/images/sarah.png'
import dashboardExample from '../../Assets/images/dashboardExample.png'
// import refugees from '../../Assets/images/refugees.jpg'
import smile from '../../Assets/images/smile.jpg'
import travels from '../../Assets/images/travels.png'

const FullWidth = (props) => (
    <Jumbotron className={props.className}>
        <Container className={props.className+'-container'}>
            <h3 className={'heading'}>{props.heading}</h3>
            <p className={'fullwidth-text'}>{props.text}</p>
            { props.buttonText ? <Button variant={props.buttonColor}>{props.buttonText}</Button> : null }
        </Container>
        {props.containedComponent}
    </Jumbotron>
);

FullWidth.defaultProps = {
    size: 'fluid', // pass '' instead of 'fluid' for not full-width
    buttonColor: 'primary'
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
            <Card.Title className='futura-heading'>{props.heading}</Card.Title>
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
                    // heading={'The mastermind network that holds you accountable to the dreams that matter most'}
                    // text={'Make real progress through community & accountability.'}
                />
                <Row className='landing-section story justify-content-md-center'>
                    <Col  className={'text-highlight'}>
                        <div> <h5 className='futura-heading'>There's a dream you can't ignore.</h5></div>
                        <div>
                            <p>You want a better life and know you're capable of accomplishing more... but you're not as consistent, organized and focused as you should be.</p>
                            <p>Other things keep getting in the way.</p>
                            <p>You've tried everything... new routines... planners... courses... but nothing really sticks. </p>
                            <p>And you've been really hard on yourself because of it. Beating yourself up for missed goals and failed systems.</p>
                            <p>But you should be deeply proud of your efforts. You're putting in the effort where most people aren't.</p>
                            <p>Every system that doesn't work is one step closer to finding what does work.</p>
                                <div className='futura-heading'>Plus, you were missing the essential ingredient: <b>community accountability.</b></div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={'dreams-image'}>
                        </div>
                    </Col>
                </Row>
                <Row className='landing-section offwhite card-heading'>
                    <h3 className='futura-heading'>Introducing a system for achieving your goals that leverages the power of community accountability</h3>
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <ul>*/}
                    {/*        <li>Know exactly what you need to work on every week.</li>*/}
                    {/*        <li>Answer to a group of peers.</li>*/}
                    {/*        <li>Develop genuine relationships with people that can change your life.</li>*/}
                    {/*        <li>Easily track your progress towards your goals.</li>*/}
                    {/*        <li>Focus more on what really matters.</li>*/}
                    {/*        <li>Connect to a growth-oriented community.</li>*/}
                    {/*        <li>Know exactly what you needed to work on every week.</li>*/}
                    {/*        <li>Know exactly what you needed to work on every week.</li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </Row>
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
                                buttonText={'Learn More'}
                                link={'#tibe'}
                            />
                            <SingleCard
                                fontAwesome={'link'}
                                heading={'Real Accountability'}
                                text={'Leverage accountability in our proven system to supercharge productivity on the  things that matter most. Imagine what you can get done with an entire team holding you accountable to your dreams.'}
                                buttonText={'Learn More'}
                                link={'#accounting'}
                            />
                            <SingleCard
                                imgClassName={'data-card'}
                                heading={'Data Driven'}
                                text={'Use our tools to set goals and track your performance each week. Measure key areas such as physical health, mindfulness, courage & clarity. Use this data to gain key insights into your behavior patterns and optimize your performance.'}
                                buttonText={'Learn More'}
                            />
                        </CardDeck>
                    </Col>
                </Row>
                <Row className='landing-section'>
                    <h2 className='futura-heading'>The System Created to Realize My Dreams, Shared with You</h2>
                    <div className={'flex-div'}>
                        <p>Hi! I'm Andrew, digital nomad, software engineer and founder of Better Together. I realized that it was hard for me to find people that would routinely ask me the hard questions. Did I do the things that I said I was going to do? Am I living up to my potential? When I had conversations with my friends that asked the hard questions... I always felt a renewed focus and inspiration.
                            <div className='futura-heading'>Since starting the mastermind, my life has transformed.</div> I realized that a big part of my success comes from routinely surrounding myself with these types of people - and these types of people can b e so hard to find! So I started Better Together - a private mastermind group for holding members accountable to the best versions of themselves.
                            I've been travelling full time since April 2018 as a digital nomad, working online as a software engineer and now as a social entrepreneur.
                            It's truly a dream come true.  <div className='futura-heading'>I want to help as many people as possible achieve their dreams - especially if the dream is unconventional.</div>
                            Organically, the mastermind started to grow and I realized how much we need positive accountability and community. Supporting others' dreams became a passion, and in the fall of 2018, I decided to build Better Together into a global network and make this one of my primary missions.
                                I've built an incredible mastermind model, community and set of tools to help you achieve your goals, and I can't wait to share them with you. I want to be feel that you are sprinting full speed towards your dreams.
                            <div className={'futura-heading'}>Humanity doesn't benefit from your success if you never grow into the person you're meant to be.</div>
                        </p>
                        <Image className='tavels-image' src={travels} />
                    </div>
                </Row>
                <Jumbotron className='main-points accounting offwhite'>
                    <Row>
                        <Col lg='2' className='icon'>
                        <FontAwesome
                            name='link'
                            size='2x'
                        />
                    </Col>
                        <Col id='accounting' lg='6'>
                            <h3 className='futura-heading'>Leverage Accountability</h3>
                            <h6>For what REALLY matters</h6>
                            <p>Why do we always get stuff done for a tough boss, often even at the expense of our own health and dreams? The boss holds you accountable with real consequences.</p>
                            <p>But a boss won't hold you to your dreams. A boss won't make sure you're writing the book, building the business or creating the art that's in your heart. That's where your tribe comes in.</p>
                            <p>Each week, we set goals around the things that matter most to us. We report to our tribe about what we've gotten done and what targets we failed to hit.</p>
                            <p>We create real consequences by assigning a money amount to each goal. If you miss a goal, you have to answer to the tribe and donate that money to charity.</p>
                            <p className='futura-heading'>The future of the global economy is self-employment. It's time to create new models of accountability.</p>
                        </Col>
                        <Col lg='4'>
                            <Card bg='light'>
                                {/*<Card.Img src="holder.js/100px270" alt="Card image" />*/}
                                <Card.Body className='charity-card-body'>
                                    <Card.Img variant="top" src={smile}/>
                                    <Card.Title className={'futura-heading'}>Total Missed Goal Donations</Card.Title>
                                    <Card.Text className='charity-amount futura-heading'>
                                        $1000
                                    </Card.Text>
                                    <Card.Link>100% of Donations Support the Refugee Crisis in Uganda</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Jumbotron>
                <QuoteLine
                    className={'quoteLine'}
                    backgroundColor={'rgba(236, 30, 58, 1)'}
                    quote={'"You are the average of the five people you spend the most time with." - Jim Rohn'}
                />
                <Jumbotron className='main-points data-driven white'>
                    <Row>
                        <Col lg='2' className='icon'>
                            <FontAwesome
                                name='chart-bar'
                                size='2x'
                            />
                        </Col>
                        <Col lg='6'>
                            <h3 className='futura-heading'>Data Driven Insights into You</h3>
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
                    backgroundColor={'#53CDFA'}
                    quote={'"What gets measured, gets managed." - Peter Drucker'}
                />
                <Jumbotron className='main-points accounting offwhite'>
                    <Row>
                        <Col lg='2' className='icon'>
                            <FontAwesome
                                name='users'
                                size='2x'
                            />
                        </Col>
                        <Col lg='9'>
                            <h3 className='futura-heading'>Find Your Tribe</h3>
                            <h6>Crowd source your success</h6>
                            <p>The economy is changing. There's more remote workers, freelancers and entrepreneurs than ever before. This means we're more empowered... but also more isolated.</p>
                            <p>Your tribe is a group of people that share your struggles, dreams and values. They are a source of inspiration, information and best practices. They are your personal board of advisers.</p>
                            <p><div className='futura-heading'>Someone's insight can save weeks or even months of trying to figure out something on your own.</div> Community is everything - including a strong predictor of health and success. Develop genuine relationships with a tribe of people that share your ambitions and are invested in your success.</p>
                            <Button href='https://forms.gle/ZPepfA9Kh3WdR7Wf6'>Apply Now</Button>
                        </Col>
                    </Row>
                </Jumbotron>
                <QuoteLine
                    className={'quoteLine'}
                    backgroundColor={'#08708A'}
                    quote={'Collaboration is the new competition.'}
                />
                <Jumbotron className='white faq'>
                    <h1 className={'center-h1 futura-heading'}>FAQ</h1>
                    <Row>
                    <Col>
                    <Accordion defaultActiveKey="3">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                What is a mastermind?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>A mastermind is a routine meeting with entrepreneurs to discuss business and personal development. It's an incredibly effective model used by some of the brightest and most successful people, including entrepreneurs such as Peter Diamandis, Brendon Bruchard, Pat Flynn, Dean Grigrosi and Lewis Howes. Every mastermind uses different structures and has different goals, but our key outcomes are productivity, community and growth.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                What makes your mastermind different than others?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>There are several low cost “masterminds” ($7 - 30/month) that are really just monthly trainings, often conducted in something like a facebook group. This type of mastermind is essentially a subscription to monthly webinars. A real mastermind, such as ours, consists of member dialogue and relationships, and is not a group coaching session. These often cost anywhere between $500 - $6,000 a month.

                                    Better Together is a mastermind in the true sense of the term - a group of members collaborating and supporting each others’ success. We also have an exclusive set of tools and a unique meeting structure. All of our members use our weekly review to reflect on and measure their progress in key areas for each session. These reviews are used to create Performance Dashboards for each member so they can gauge their progress over time. Our meeting format has also been adjusted for over 2 years to find the most effective model.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                How does Better Together work?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>If you have applied and been offered an invitation to join, you’ll be placed in a mastermind tribe based on your scheduled availability and similar interests with other members. You’ll have weekly accountability meetings to track, measure and improve on your goals. You’ll also have the opportunity to share your challenges in order to crowd-source wisdom and strategies. We have found that someone’s insight can save you weeks or even months of trying to figure out something on your own. Better Together is best thought of as a structured accountability network with a set of exclusive tools to help keep you focused and accountable. Membership will also come with the added benefit of optional monthly training and in-person events.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                                How many people will be in my mastermind?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>Each mastermind tribe is limited to 10 people. This allows for real relationships to form between members and for everyone to have an opportunity to join in conversations. We also make efforts to group members based on shared goals.

                                    Each member also has access to the wider network - all members in all tribes - via a Slack channel and optional monthly network-wide trainings and live events.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="4">
                                Is there a limit to the number of people that can join the network?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>Yes. The goals of Better Together is to reach a threshold of 100 members by 10 mastermind "tribes" of 10.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="5">
                                Are there any events with the entire network?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body>Yes! Once a month there will be web trainings focused on a personal development or business topic. These are optional, but a great way to interact with the larger community.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="6">
                                Are there any live events?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="6">
                                <Card.Body>We've hosted live retreats in the past, and while there's nothing currently planned, there will eventually be live retreats and business hackathons in the digital nomad spirit. For these, we meet in person for focused work and personal development sessions.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="7">
                                What is the cost of joining?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="7">
                                <Card.Body>We have a dynamic pricing model based on the number of members that have already joined. Your price will never change. If you're an early adopter and join at $49/month, that will be your price for life.

                                    0 - 10 members: $49/month
                                    11 - 30 members: $99/month
                                    31 - 60 members: $149/month
                                    61 - 100 members: $199/month

                                    Membership dues can be paid on a monthly, quarterly or yearly basis.

                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="8">
                                Is there a money back guarantee?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="8">
                                <Card.Body>Yes! If you decide that the community is not a good fit for you, there's a 100% money back guarantee within the first 30 days - no questions asked. After the 30 days you can cancel anytime.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="9">
                                I can't afford a membership, but I still want to join. What are my options?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="9">
                                <Card.Body>If someone has successfully applied but genuinely can't afford membership dues, they are welcome to apply for work-trade. We will never turn anyone away for lack of money. There was a period of my life where I couldn't afford to join communities such as this, but I know that they would've transformed my life. I won't let that happen to you.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    </Col>
                    <Col>
                        <Accordion defaultActiveKey="13">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="10">
                                Is there a money back guarantee?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="10">
                                <Card.Body>Yes! If you decide that the community is not a good fit for you, there's a 100% money back guarantee within the first 30 days - no questions asked. After the 30 days you can cancel anytime.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="11">
                                Can I cancel anytime?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="11">
                                <Card.Body>Of course. If you feel like it's time to move on, no one will try to stop you.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="12">
                                How do you decide who can join?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="12">
                                <Card.Body>Members are selectively offered invitations based on shared values. A community is only as healthy as our individuals, so applicants are prioritized based on common values of:

                                    Open Mindedness: We love to learn and are open to new ideas. We think critically and embrace fresh and challenging ideas.

                                    Growth Mindset: We believe that we can develop whatever new skill we set our minds to. We acknowledge that we are not born with a fixed amount of talent in any category.

                                    Accountability: We want to encourage and inspire the people around us to live their best possible lives. We are not afraid to hold others to the high standards they have set for themselves. We aren’t scared to ask the hard questions.

                                    Service Mindset: We believe that through our work and self-actualization, we can make the world a better place.

                                    Support: We seek to build others up and encourage their success.

                                    Authenticity: In the age of Instagram filters, we dare to value true authenticity as a tool for healing broken communities. We believe that honestly sharing our struggles as well as our triumphs is the path for connection.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="13">
                                Who is Better Together for?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="13">
                                <Card.Body>It's for people that want to get shit done! It’s for people that know that they would benefit from joining a community focused on accountability and support. Better Together is for anyone with a dream - especially if that dream is unconventional. It's for people who share our values.

                                    We are usually most attractive to entrepreneurs, nomads, freelancers and artists.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="14">
                                Do I have to be an entrepreneur to join?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="14">
                                <Card.Body>No! You just need to be growth-oriented, focused on realizing a dream and working towards it while supporting the other community members in their own endeavours.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="15">
                                What are the meetings like?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="15">
                                <Card.Body>Every mastermind in the network follows the same meeting format. Each meeting has the same general components including:

                                    - Wisdom Exchange
                                    - Weekly Review
                                    - Accountability Check
                                    - Goal Setting
                                    - Rotating Member Spotlight: (Where one member gets the entire group’s focus for one session. They can receive feedback, critical thoughts, or insights on a business or personal challenge.)
                                    - Tool & Resource Exchange
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="16">
                                What am I expected to contribute at the meetings?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="16">
                                <Card.Body>Come prepared to authentically share your big dreams, spend time reviewing your week, set goals and share your insights to help other members.
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="17">
                                What can I expect when I join?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="17">
                                <Card.Body>After joining, you'll work through a couple exercises that every new member completes. These exercises will help you refine and explain your dreams to your new mastermind tribe. The system will be explained to you and you'll be welcomed into the community.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="18">
                                Why did you start this project?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="18">
                                <Card.Body>There are more remote workers, nomads, freelancers and entrepreneurs than ever before. This is GREAT—we're more empowered than ever—but we're also more isolated than ever before, living more and more through social media. I want to help empower the dreams of the freelancers, entrepreneurs and artists while also reducing their feeling of isolation by offering a supportive community.

                                    Also, this simple idea: If you don't build it, we don't get it. Humanity as a whole is improved with every person that is able to self-actualize. This is the ethos of Better Together, and we strive to help each person reach success.

                                    We are explicitly reject the famine mentality.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    </Col>
                    </Row>
                </Jumbotron>
                <Row className={'testimonials offwhite'}>
                    <h2 className={'heading futura-heading'}>Member Testimonials</h2>
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
                                text={'“Better Together works for me even though I dont typically seek help from mentors or professional organizations. That is the beauty - you make the group whatever you want it to be to meet your needs. Regardless of your needs, the structure it provides helps to refine focus on important life goals. But what I really appreciate is the community of like-minded individuals who are dedicated to making ourselves better. Its a genuine hour of my time that brings me clarity and support, and I couldnt be happier with its contribution to my trek towards a fulfilling life.”'}
                                source={'Sarah'}
                                linkText={'Learn more about Sarah'}
                                link={'https://www.instagram.com/brunnathestunna/'}
                            />
                        </Col>
                    </CardDeck>
                </Row>
                <Jumbotron className='steps white'>
                    <h1 className='futura-heading'>We're Better Together</h1>
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
                <Jumbotron>
                    <h2 className='futura-heading'>Spots are limited - reserve yours today to accelerate progress towards your dreams</h2>
                    {/*<h5>The network has a limit of 100 members. Reserve your spot in a global network of entrepreneurs, artists and high performers before we are closed.</h5>*/}
                    <Card className='testimonial-card' style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={dawn} className='testimonial-image'/>
                        <Card.Body>
                            <Card.Title>Join Us</Card.Title>
                            <Card.Text>
                                <p className={'futura-heading'}>Membership dues are $99/month.</p>
                                <p>Members are selectively chosen.</p>
                            </Card.Text>
                            <Button className='application-button' href='https://forms.gle/ZPepfA9Kh3WdR7Wf6'>Reserve Your Spot</Button>
                        </Card.Body>
                    </Card>
                </Jumbotron>
            </div>
        )
    }
}

export { FullWidth, FiftyFifty, QuoteLine, Testimonial }