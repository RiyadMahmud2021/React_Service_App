import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';


class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                 <Container fluid={true} className="topFixedBanner p-0">
                     <div className="topBannersOverlay">
                         <Container className="topContent">
                             <Row>
                                 <Col className="text-center">
                                     <h1 className="topTitle">WE ARE SOFTWARE DEVELOPERS</h1>
                                     <h4 className="topSubTitle">For Mobile & Web Application</h4>
                                     <Button variant="primary">More Info</Button>{' '}
                                     {/*With Bootstrap Button code from react bootstrap website*/}
                                 </Col>
                             </Row>
                         </Container>
                     </div>

                 </Container>
            </Fragment>
        );
    }
}

export default TopBanner;