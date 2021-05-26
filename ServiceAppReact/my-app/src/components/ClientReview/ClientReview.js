import React, {Component,Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";
import ClientRev from '../../asset/image/riyadmahmudpic.png';

class ClientReview extends Component {
    render() {
        var settings = {
            vertical: true,
            verticalSwiping: true,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            Speed: 2000,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1150,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint:700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint:350,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">CLIENT SAYS</h1>
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">    {/*use sliderDiv(custom) or use justify-content-center*/}
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src={ClientRev} />
                                    <h1 className="serviceName">Web Development</h1>
                                    <p className="serviceDescription">Because of free and simple online website design software and online content management platforms, such as WordPress, it is easier than ever to create a new website.</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src={ClientRev} />
                                    <h1 className="serviceName">Web Development</h1>
                                    <p className="serviceDescription ">Because of free and simple online website design software and online content management platforms, such as WordPress, it is easier than ever to create a new website.</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src={ClientRev} />
                                    <h1 className="serviceName">Web Development</h1>
                                    <p className="serviceDescription">Because of free and simple online website design software and online content management platforms, such as WordPress, it is easier than ever to create a new website.</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;