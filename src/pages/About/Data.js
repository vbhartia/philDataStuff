import React, {Component} from 'react';
import {Button, Card, CardBody, CardFooter, CardImg, CardImgOverlay, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import Wrap from '../../components/Wrap';

export class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Wrap>
                <Card>
                    <CardBody>
                        <CardTitle>About The Data</CardTitle>
                    </CardBody>
                    <CardBody>
                        <CardText>
                            In 2011, a PVT was conducted in Nigeria by Project Swift Count. Technical assistance was provided by the National Democratic Institute.
                        </CardText>
                        <CardText>
                            In 2015, a PVT was conducted in Nigeria by the Transition Monitoring Group. Technical assistance was provided by the National Democratic Institute.
                        </CardText>
                    </CardBody>
                </Card>
            </Wrap>
        );
    }
}