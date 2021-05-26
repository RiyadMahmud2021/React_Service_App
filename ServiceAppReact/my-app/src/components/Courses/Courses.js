import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import web from "../../asset/image/web.png";
import mobi from "../../asset/image/mobiapp1.jpg"
import desk from "../../asset/image/desktopapp.jpg"
import graph from "../../asset/image/graphicsdev.png"

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h2 className="serviceMainTitle out text-uppercase">Our Courses</h2>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={web}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify courseTitle">Web Development</h4>
                                    <p className="text-justify courseDescription">We believe that this will be true for the next 5-10 years at least. When searching for the best. </p>
                                    <a className="text-justify courseDetails" href="#"> Details </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={mobi}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify courseTitle">Mobile Development</h4>
                                    <p className="text-justify courseDescription">If you want to create a unique mobile app with more functions and you don't know. </p>
                                    <a className="text-justify courseDetails" href="#"> Details </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="marginRow">
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={desk}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify courseTitle">Desktop Development</h4>
                                    <p className="text-justify courseDescription">You want to build your own startup company; You're trying to be a freelancer.
                                    </p>
                                    <a className="text-justify courseDetails" href="#"> Details </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={graph}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="text-justify courseTitle">Graphics Development</h4>
                                    <p className="text-justify courseDescription">You must develop these 9 skills to keep growing, find success and stay ahead in business as a successful</p>
                                    <a className="text-justify courseDetails" href="#"> Details </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Courses;