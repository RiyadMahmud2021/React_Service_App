import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import ForServP from '../components/ForServP/ForServP';
import Footer from '../components/Footer/Footer';

class ServicePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation Headtitle="ServicePage"/>
                <PageTop pageTitleAbout="Get My Services"/>
                <ForServP/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicePage;