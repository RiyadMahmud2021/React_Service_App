import React, { Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faYoutube} from "@fortawesome/free-brands-svg-icons";
 
class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection">

                    <Row>
                        <Col lg={3} md={7} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Follow Me</h1> 
                            <a className="socialLink" href="https://www.facebook.com/riyad.mahmud.16/"><FontAwesomeIcon icon={faFacebook}/> Facebook</a>  <br/>
                            <a className="socialLink" href="#"><FontAwesomeIcon icon={faYoutube}/> YouTube</a> 
                        </Col>
                        <Col lg={3} md={7} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Address</h1>
                            <h7 className="addressDescription">#26/4,Bohorompur Rajshahi</h7>  <br/>
                            <h7 className="addressDescription"><FontAwesomeIcon icon={faEnvelope}/> riyad.bauet@gmail.com</h7> <br/>
                            <h7 className="addressDescription"><FontAwesomeIcon icon={faPhone}/> +8801755935047</h7> 
                        </Col>              
                        <Col lg={3} md={7} sm={12} className="p-5 text-justify"> 
                            <h1 className="serviceName">Information</h1>
                            <a className="footerLink" href="#">About Me</a> <br/> 
                            <a className="footerLink" href="#">My Resume</a> <br/>
                            <a className="footerLink" href="#">Contact Me</a> 
                        </Col>
                        <Col lg={3} md={7} sm={12} className="p-5 text-justify"> 
                            <h1 className="serviceName">Legal</h1>
                            <a className="footerLink" href="#">Refund Condition </a> <br/> 
                            <a className="footerLink" href="#">Terms & Conditions</a> <br/>
                            <a className="footerLink" href="#">Privacy Policy</a> 
                        </Col>
                    </Row>

                </Container>

                <Container fluid={true} className="text-center copyRightSec">
                    <a href="#" className="copyRightSecLink"> 𝓐𝓵-𝓐𝓺𝓼𝓪𝓘𝓣.𝓬𝓸𝓶 &copy; 2020-2021 </a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;
