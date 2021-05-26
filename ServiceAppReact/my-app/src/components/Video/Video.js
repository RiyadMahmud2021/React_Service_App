import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'video-react/dist/video-react.css';
import {Player,BigPlayButton} from 'video-react';

class Video extends Component {

    constructor(){
        super();
        this.state={
            show: false
        }
    }

    modalClose=()=> this.setState({show:false})
    modalOpen=()=> this.setState({show:true})

    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="videoCard">
                            <div>
                                <h2 className="videoTitle text-uppercase">How I Do</h2>
                                <p className="videoDescription">Because of free and simple online website design software and online content management platforms, such as WordPress, it is easier than ever to create a new website. Within five minutes and a couple of clicks, you can have a home business website. However, if your goal is to have a website that brings in clients and customers, you can't simply slap together a website and expect success.
                                </p>
                                <p><FontAwesomeIcon onClick={this.modalOpen} className="playButton" icon={faPlayCircle}/></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> </Modal.Title>
                    </Modal.Header>
                        <Player>
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                            <BigPlayButton position="center"/>
                        </Player>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary"  position="center"  onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Video;