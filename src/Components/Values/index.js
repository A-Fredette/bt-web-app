import React from 'react';
import './values.scss';
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button } from "react-bootstrap";

export default class Values extends React.Component {
    render() {
        return (
            <Jumbotron className='values'>
                <h2 className='futura-heading'>Our Values</h2>

                <p>No matter their particular passion, our members are committed to personal growth. A community is only as healthy as our individuals, so applicants are prioritized based on common values of:</p>

                    <ul>
                        <li><b>Open Mindedness:</b> We love to learn and are open to new ideas. We think critically, but welcome new and challenging ideas.</li>
                        <li><b>Growth Mindset:</b> We believe that we can develop whatever new skill we set our minds to. We acknowledge that we are not born with a fixed amount of talent in any category.</li>
                        <li><b>Accountability:</b> We want to encourage and inspire the people around us to live their best possible lives. We are not afraid to hold others to the high standards they have set for themselves. We aren’t scared to ask the hard questions.</li>
                        <li><b>Service Mindset:</b> We believe that through our work and self-actualization, we can make the world a better place.</li>
                        <li><b>Support:</b> We seek to build others up and encourage their success.</li>
                        <li><b>Authenticity:</b> In the age of Instagram filters, we dare to value true authenticity as a tool for healing broken communities. We believe that honestly sharing our struggles as well as our triumphs is the path for connection.</li>
                    </ul>

                <p>Sound like you? We can't wait to meet you.</p>

                <Button className='application-button' href='https://forms.gle/ZPepfA9Kh3WdR7Wf6'>Apply Now</Button>
            </Jumbotron>
        )
    }
}