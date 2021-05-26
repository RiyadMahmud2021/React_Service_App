import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import RecentP from  '../../asset/image/recentP.jpg';

class Portfolio extends Component {
    render() {
        return (
            <Fragment>
                 <Container className="text-center mt-5">
                     <Row>
                          <Col lg={4} md={6} sm={12}  >
                             <Card className="projectCard">
                                 <Card.Img variant="top" src={RecentP}/>
                                 <Card.Body>
                                     <Card.Title className="projectCardTitle">WBD Travels</Card.Title>
                                     <Card.Text className="projectCardDescription">
                                         Some quick example text to build on the card title and make up the bulk of
                                         the card's content.  
                                     </Card.Text>
                                     <Button variant="primary">Details</Button>
                                 </Card.Body>
                             </Card>
                         </Col>
                         <Col sm={12} md={6} lg={4}>
                             <Card className="projectCard">
                                 <Card.Img variant="top" src={RecentP} />
                                 <Card.Body>
                                     <Card.Title className="projectCardTitle">WBD Electronics</Card.Title>
                                     <Card.Text className="projectCardDescription">
                                         Some quick example text to build on the card title and make up the bulk of
                                         the card's content.
                                     </Card.Text>
                                     <Button variant="primary">Details</Button>
                                 </Card.Body>
                             </Card>
                         </Col>
                         <Col sm={12} md={6} lg={4}>
                             <Card className="projectCard">
                                 <Card.Img variant="top" src={RecentP} />
                                 <Card.Body>
                                     <Card.Title className="projectCardTitle">WBD Products</Card.Title>
                                     <Card.Text className="projectCardDescription">
                                         Home quick example text to build on the card title and make up the bulk of
                                         the card's content.
                                     </Card.Text>
                                     <Button variant="primary">Details</Button>
                                 </Card.Body>
                             </Card>
                         </Col>
                     </Row>
                     <Row>
                          <Col lg={4} md={6} sm={12}  >
                             <Card className="projectCard">
                                 <Card.Img variant="top" src={RecentP}/>
                                 <Card.Body>
                                     <Card.Title className="projectCardTitle">WBD Travels</Card.Title>
                                     <Card.Text className="projectCardDescription">
                                         Some quick example text to build on the card title and make up the bulk of
                                         the card's content.  
                                     </Card.Text>
                                     <Button variant="primary">Details</Button>
                                 </Card.Body>
                             </Card>
                         </Col>
                         <Col sm={12} md={6} lg={4}>
                             <Card className="projectCard">
                                 <Card.Img variant="top" src={RecentP} />
                                 <Card.Body>
                                     <Card.Title className="projectCardTitle">WBD Electronics</Card.Title>
                                     <Card.Text className="projectCardDescription">
                                         Some quick example text to build on the card title and make up the bulk of
                                         the card's content.
                                     </Card.Text>
                                     <Button variant="primary">Details</Button>
                                 </Card.Body>
                             </Card>
                         </Col>
                         <Col sm={12} md={6} lg={4}>
                             <Card className="projectCard">
                                 <Card.Img variant="top" src={RecentP} />
                                 <Card.Body>
                                     <Card.Title className="projectCardTitle">WBD Products</Card.Title>
                                     <Card.Text className="projectCardDescription">
                                         Home quick example text to build on the card title and make up the bulk of
                                         the card's content.
                                     </Card.Text>
                                     <Button variant="primary">Details</Button>
                                 </Card.Body>
                             </Card>
                         </Col>
                     </Row>
                 </Container>
            </Fragment>
        );
    }
}

export default Portfolio;