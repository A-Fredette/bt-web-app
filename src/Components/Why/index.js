import React from 'react';
import './why.scss';
import Jumbotron from "react-bootstrap/Jumbotron";

export default class Why extends React.Component {
    render() {
        return (
            <Jumbotron className='why'>
                <h2>Why this project?</h2>

                <p>One of the paradoxes of modern life is that we are more safe, secure and wealthy than at any other time in history. Kings of the past would beg for the technological powers of today’s poor. For the first time in history we are safer than ever before from the threat of famine, plagues and war, but at the same time, we are seeing an increase in diseases of dissatisfaction - including suicide, depression and anxiety.</p>

                <p>This is at least partially attributed to an increase in isolation, and a break down of community. Community is something that many of us are missing, and it’s something that is very, very good for you. One of the predominant social characteristics in the world’s “Blue Zones,” where people often live to be over 100, is the presence of strong community. This makes sense intuitively: what feels better than being surrounded by people that want the best for you? Not only is community an essential ingredient in personal health, it’s an essential ingredient of personal success. Studies have shown that accountability is closely linked with productivity. The better our accountability systems, the more likely we are to actually check off our goals for the week.</p>

                <p>This breakdown in community is due to several factors, including trends in the job market and the rise on social media. For the first time in history, it’s possible for people to get all of their social connection through digital mediums - social media, gaming, etc - and many do just that. These are undoubtedly not the depth of relationships we all crave.</p>

                <p>The second major trend is the transformation of work. We’ve moved increasingly into occupations that are relatively isolating. We work remotely, we bury ourselves in spreadsheets, databases and code bases. We create music, write books and blogs. All of these things happen on the computer, and it’s great! We’re more productive and empowered to create than any other time in history…but we’re also more alone.</p>

                <p>Technology has inadvertently contributed to the breakdown of community, but we can leverage it to do exactly the opposite. By using technology intelligently, with the acknowledgement that other people are some of our greatest sources of joy and success, we can start to deliver on the promises of social media and connect the world.</p>

                <p>The BT Network was developed with the mission of helping each of us find our tribe. Want to be an author? An entrepreneur? A better mother or sibling? A digital nomad? Whatever your ambition, there are countless others like you... all wishing for the opportunity to share struggles, victories, encouragement and insight.</p>
            </Jumbotron>
            )
    }
}