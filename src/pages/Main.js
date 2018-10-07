import React, {Component} from 'react';
import {Button, Card, CardBody, CardFooter, CardImg, CardImgOverlay, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import Wrap from '../components/Wrap';
import data from '../data/main';
import AOS from 'aos';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

// for Turn out in Nigeria
const config2 = {
    chart: {
        type: 'area',
        style: {
          fontFamily: 'Arial, sans-serif',
        },
        backgroundColor: 'transparent',
    },
    style: {
      fontFamily: 'Arial, sans-serif',
    },
    backgroundColor: 'transparent',
    title: {
        text: 'Turnout in Nigerian Elections'
    },
    subtitle: {
        text: '2007 to 2015'
    },
    xAxis: {
        categories: ['1999', '2003', '2007', '2011', '2015']
    },
    yAxis: {
        title: {
            enabled: false,
            //text: 'Election Turnout'
        },
        min: 40,
        labels: {
            formatter: function () {
                return this.value+"%";
            }
        }
    },
    tooltip: {
        formatter: function() {
          return 'In <b>' + this.x + '</b> turnout was <b>' + this.y + '</b>% ';
        }

    },
    plotOptions: {
        area: {
            tickInterval: 4,
            marker: {
                enabled: false,
                symbol: 'circle',
                stroke: 5,
                radius: 5,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'Turnout',
        color: '#0e677f',
        data: [52, 69, 57, 54, 44]
    }],
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    }
}


// Data gathered from http://populationpyramid.net/germany/2015/
// Age categories
var categories = [
    'Ebonyi', 'Edo', 'Ekiti', 'FCT',
    'Kebbi', 'Kwara', 'Ondo', 'Taraba', 'Oyo',
    'Jigawa', 'Ogun', 'Bayelsa', 'Lagos', 'Adamawa',
    'Kogi', 'Plateau', 'Zamfara', 'Niger', 'Delta',
    'Gombe', 'Bauchi', 'Imo', 'Osun', 'Yobe', 'Borno', 'Enugu',
    'Nassarawa', 'Rivers', 'Benue', 'Akwa Ibom', 'Cross River',
    'Katsina', 'Kano', 'Sokoto', 'Abia', 'Kaduna', 'Anambra'
];

var config3 = {
    chart: {
        type: 'bar',
        style: {
          fontFamily: 'Arial, sans-serif',
        },
        height: 580,
        backgroundColor: 'transparent',
    },
    title: {
        text: 'Percent of Polling Units in Which Voters Were Accredited to Vote without the PVC Reader Checking Their Card',
    },
    subtitle: {
        text: '(Click on the legend to explore by year.)'
    },
    xAxis: [{
        categories: categories,
        reversed: false,
        labels: {
            step: 1
        }
    }, { // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        linkedTo: 0,
        labels: {
            step: 1
        }
    }],
    yAxis: {
        title: {
            text: null
        },
        labels: {
            formatter: function () {
                return Math.abs(this.value) + '%';
            }
        }
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    tooltip: {
        formatter: function () {
            return this.series.name + ' in ' + this.point.category + ' state:' + '<br/>' +
                '<b>' + Highcharts.numberFormat(Math.abs(this.point.y), 0) + '%' + '</b>';
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Percent of PUs in 2011',
        color: '#0e677f',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, -3, -4,
            -7, -9, -10, -11, -11, -11,
            -12, -12, -13, -13, -14, -16,
            -16, -17, -19, -19, -19, -19,
            -32, -35, -35, -36, -38, -38,
            -43, -43, -52
        ]
    }, {
        name: 'Percent of PUs in 2015',
        color: '#81d2ff',
        data: [
            26, 56, 36, 0, 6, 8, 21, 42, 56, 27,
            44, 20, 41, 52, 51, 56, 26, 51, 52, 26,
            48, 64, 27, 42, 53, 46, 58, 54, 56, 52,
            55, 59, 53, 62, 70, 52, 56
        ]
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
                <HighchartsReact
                    highcharts={Highcharts}
                    options={config2}
                />
                <HighchartsReact
                    highcharts={Highcharts}
                    options={config3}
                />
                
            </Wrap>
        );
    }
}
