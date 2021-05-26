import React, { Component, Fragment } from 'react';
import {Col, Container, Row, Form, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12} className="text-justify">

                        <h1 className="serviceName">Quick Connect</h1>
                        <Form>
                            <Form.Group>
                                <Form.Label className="ContactDescription">Name</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="ContactDescription">Email Address</Form.Label>
                                <Form.Control type="email"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="ContactDescription">Message</Form.Label>
                                <Form.Control type="text" as="textarea" rows={3}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                        </Col>

                        <Col lg={3} md={7} sm={12} className="text-justify">

                            <h1 className="serviceName">Discuss Now</h1>
                            <br/>
                            <h7 className="addressDescription">#279/15,Bohorompur Rajshahi</h7>  
                            <br/>
                            <br/>
                            <h7 className="addressDescription"><FontAwesomeIcon icon={faEnvelope}/> riyad.bauet@gmail.com</h7> 
                            <br/>
                            <br/>
                            <h7 className="addressDescription"><FontAwesomeIcon icon={faPhone}/> +8801755935047</h7>

                        </Col> 
             
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;