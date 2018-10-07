import React, {Component} from 'react';
import {Button, Card, CardBody, CardFooter, CardImg, CardImgOverlay, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import Wrap from '../components/Wrap';
import data from '../data/main';
import AOS from 'aos';

import ReactHighcharts from 'react-highcharts'; // Expects that Highcharts was loaded in the code.

const config = {
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
    }]
  };

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount(){
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
                                            <CardText><i>Vivamus eu feugiat lectus, vel maximus urna. Ut pellentesque id eros sed ornare.</i></CardText>
                                        </CardBody>
                                        <CardFooter>
                                            <Button outline color="info">SEE MORE</Button>
                                        </CardFooter>
                                    </CardImgOverlay>
                                </Card>
                            ))
                        )
                        : ('Data not found')
                    };
                </div>
                <ReactHighcharts config={config}/>
            </Wrap>
        );
    }
}
