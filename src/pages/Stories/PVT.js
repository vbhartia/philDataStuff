import React, {Component} from 'react';
import {Button, Card, CardBody, CardFooter, CardImg, CardImgOverlay, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import AOS from 'aos';
import Wrap from '../../components/Wrap';
import data from '../../data/pvt-data.json';

export class PVT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount = () => {
        AOS.init();
        this.setState({data});
    }

    render() {
        return (
            <Wrap>
                <div className="big-box">
                    {
                        this.state.data
                        ? (
                            this.state.data.map((i) => (
                                <Card className="item" data-aos="slide-up" id={i.id} key={i.id}>
                                    <div className="card-img"></div>
                                    <CardImgOverlay>
                                        <CardBody>
                                            <CardTitle>{i.head}</CardTitle>
                                            <CardSubtitle>{i.sub}</CardSubtitle>
                                            <CardText>{i.text}</CardText>
                                        </CardBody>
                                    </CardImgOverlay>
                                </Card>
                            ))
                        )
                        : ('Data not found')
                    }
                    
                </div>
            </Wrap>
        );
    }
}