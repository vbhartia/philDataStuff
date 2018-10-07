import React, {Component} from 'react';
import {
    Button, 
    Card, CardBody, CardFooter, CardImg, CardImgOverlay, CardSubtitle, CardText, CardTitle,
    Form, FormGroup, FormText, Input,
    Label} from 'reactstrap';
import Wrap from '../components/Wrap';

export class Contact extends Component {
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
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="e.g. myemail@example.com" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Text Area</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                    </CardBody>
                </Card>
            </Wrap>
        );
    }
}