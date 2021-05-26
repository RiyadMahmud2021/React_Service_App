import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import GraphicsDevLogo from '../../asset/logosvg/graphicsdev.svg';
import MobileDevLogo from '../../asset/logosvg/mobileappdev.svg';
import WebDevLogo from  '../../asset/logosvg/WebDev.svg';

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5"> 
                    <Row>
                        <Col lg={4} md={6} sm={12} >
                            {/*large screen 12/4=3 col..md scr 12/6=2 col sm 12/12=1 col*/}
                            <div className="serviceCard text-center">
                                <img src={WebDevLogo}/>
                                <h3 className="serviceName">Web Development</h3>
                                <p className="serviceDescription">Start Developing Your Own Professional Website with Wix's Advanced Tools. Get the Flexibility You Need to Create Without Limits an </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={MobileDevLogo}/>
                                <h3 className="serviceName">Mobile Development</h3>
                                <p className="serviceDescription">We will develop your mobile app.Start Developing Your Own Professional Website with Wix's Advanced Tools. Get the Flexibility You Need to Create</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={GraphicsDevLogo}/>
                                <h3 className="serviceName">Graphics Design</h3>
                                <p className="serviceDescription">We will develop graphics.Start Developing Your Own Professional Website with Wix's Advanced Tools. Get the Flexibility You Need to Create</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;