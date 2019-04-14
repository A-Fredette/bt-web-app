import React from 'react'
import { FullWidth } from "../Landing";
import {Row} from "react-bootstrap";

export default class Footer extends React.Component {
    render() {
        return (
            <Row>
                <FullWidth
                    text={'All right reserved.'}
                    />
            </Row>
        )
    }

}