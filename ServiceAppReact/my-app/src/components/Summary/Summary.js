import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";


class Summary extends Component {


    render() {
        return (
            <Fragment>
                <Container fluid={true} className="SummaryBanner SummarySection p-0 TakingMargin">
                    <div className="SummaryBannerOverlay">
                        <Container className="text-center  TakingPaddingforWordCard">
                            <Row>
                                <Col lg={8} md={6} sm={12} >
                                    <Row className="countSection">
                                        <Col>
                                            <h1 className="countNumber">20</h1>

                                                {/*<CountUp start={0} end={100}>*/}
                                                {/*    {({ countUpRef, start }) => (*/}
                                                {/*        <VisibilitySensor onChange={start} delayedCall={true}>*/}
                                                {/*            <span ref={countUpRef}/>*/}
                                                {/*        </VisibilitySensor>*/}
                                                {/*    )}*/}
                                                {/*</CountUp>*/}

                                            <h3 className="countTitle">Total Projects</h3>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                        <Col>
                                            <h1 className="countNumber">20</h1>
                                            <h3 className="countTitle">Total Clients</h3>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12} className="countCardSection">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title className="cardTitle text-justify workCard ">How I
                                                Work</Card.Title>
                                            <Card.Text>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon
                                                    className="iconBullet" icon={faCheckCircle}/> Requirement Analysis</p>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon
                                                    className="iconBullet" icon={faCheckCircle}/> System Analysis</p>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon
                                                    className="iconBullet" icon={faCheckCircle}/> Coding Analysis</p>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon
                                                    className="iconBullet" icon={faCheckCircle}/> Implementation</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }

}

export default Summary;