import React, {Component} from 'react';
import {Button, Card, CardBody, CardFooter, CardImg, CardImgOverlay, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import Wrap from '../../components/Wrap';

export class Us extends Component {
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
                    <CardTitle>About Yiaga</CardTitle>
                    <CardText>
                        <small className="text-muted">[Text to be added by Yiaga]</small>
                    </CardText>
                    </CardBody>
                    <CardImg bottom width="100%" src="https://imgplaceholder.com/320x240/ededed/fff/fa-video-camera" alt="Card image cap" />
                </Card>
            </Wrap>
        );
    }
}