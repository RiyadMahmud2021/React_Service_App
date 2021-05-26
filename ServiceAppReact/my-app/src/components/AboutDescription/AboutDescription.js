import React, { Component,Fragment } from 'react';
import {Col, Container, Row} from "react-bootstrap";

class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col sm={12} lg={12} md={12}>
                            <h1 className="AboutDescriptionName"> Who's the Founder? </h1>
                            <hr/>
                            <p className="AboutDescription text-justify"> I am Riyad Mahmud. I am graguated from Dept. of Computer Science and Engineering, BAUET. </p>
<h2 className="AboutDescription text-justify">Education:</h2>
<p className="AboutDescription text-justify">
                    - Graduation: Bangladesh Army University Of Engineering and Technology,Qadirabad Cant. Natore,Rajshahi <br/> 
                    - HSC: New Government Degree College,  Rajshahi  {/*   (GPA 4.63). */} <br/> 
                    - SSC: Government Laboratory High School, Rajshahi  {/* (GPA 5: All).*/}<br/>  
                    - Primary Schooling : Masjid Mission School,  Rajshahi. </p>
 <h2 className="AboutDescription text-justify">Work Areas: </h2>
<p className="AboutDescription text-justify">
- Font End Web Developing with html,css,bootstrap,javescript,react js,react bootstrap<br/> 
- Content Writing for Websites including Blogs, Affiliate Marketers, News Portals <br/> 
- Editing and Publishing  Journalistic and Creative Writing Blogging, Vlogging, Youtubing (Starter) <br/> 
<h2 className="AboutDescription text-justify">Soft skills: </h2>
- Field Realated:
VS Code,
WebStorm,
Anaconda,
CodeBlocks,
Dev-C++,
NotePad++,
Brackets <br/>
- Others:
Google Doc,
Google Spreadsheets,
MS Word,
MS Excel,
MS PowerPoint.

  </p>
     {/* ===================================================================================== */}
                            <h1 className="AboutDescriptionName">What's Our Mission?</h1>
                            <hr/>
                            <p className="AboutDescription text-justify">To enhancing the business growth of our customers with creative Design and Development to deliver market-defining high-quality solutions that create value and consistent competitive advantage for our clients around the world.
                            </p>
    {/* ===================================================================================== */}

                            <h1 className="AboutDescriptionName">What's Our Vision?</h1>
                            <hr/>  
                            <p className="AboutDescription text-justify"> To become a prime performer, in providing quality Web, Print and Software solutions in the competitive global market place.
  </p>
                            <p className="AboutDescription text-justify">We take pride in our on time delivery and ability to meet quick turn around requests while
                            exceeding customer quality demands.
                            Customer Satisfaction continues to be of utmost importance to CWS, as do Consistent quality, Constant innovation, 
                            Technology enhancement, Process improvement and Customer orientation. We have developed our core competence and aligning 
                            objectives at all levels so as to realize synergy in operations. It is our collaborative approach, creative input, and 
                            emphasis on economical solutions that has allowed us to develop an impressive and diverse client list.</p>
                        </Col>
    {/* ===================================================================================== */}

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutDescription;