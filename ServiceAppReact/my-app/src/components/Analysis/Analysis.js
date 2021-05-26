import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";


class Analysis extends Component {

    constructor(){
        super();
        this.state={
            data:[
                {Technology:'ASP.NET',Projects:100},
                {Technology:'Java',Projects:40},
                {Technology:'Kotlin',Projects:20},
                {Technology:'SQL',Projects:90},
                {Technology:'Bootstrap',Projects:70},
                {Technology:'Jquery',Projects:50},
                {Technology:'React',Projects:90},
                {Technology:'Angular',Projects:40}
        ]
        }
    }

    render() {
        var blue = "rgba(0,115,230,0.8)"
        return (
            <Fragment>
                <Container className="text-center">
                    <h2 className="serviceMainTitle text-uppercase">Technology Used</h2>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                        <ResponsiveContainer>
                            <BarChart width={100} height={300} data={this.state.data}>
                                <XAxis dataKey="Technology"/>
                                <Tooltip/>
                                <Bar dataKey="Projects" fill={blue}>
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify description">
                                To understand technology, we must first understand the human nature of inquisitiveness and acquiring knowledge. Man’s quest for knowledge has made him make observations of events and document them. These observations are analyzed and basic principles of science applied to them, to give birth to technology. Man uses technology to make life simple and convenient.
                                Technology has evolved through millions of years with the efforts of man. It has made modern living fast, safe and comfortable. Today, it is possible to travel thousands of miles, within a couple of hours at the speed of sound. Thanks to transportation technology. You can switch on or off your air conditioner before reaching home, by using your phone.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;