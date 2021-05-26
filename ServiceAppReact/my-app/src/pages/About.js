import React, { Component,Fragment } from 'react';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import AboutDescription from '../components/AboutDescription/AboutDescription';
import Footer from '../components/Footer/Footer';

class About extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation Headtitle="About"/> 
                <PageTop pageTitleAbout="About Us"/> 
                <AboutDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default About;