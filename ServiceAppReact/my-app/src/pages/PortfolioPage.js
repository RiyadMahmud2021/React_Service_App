import React, { Component } from 'react';
import { Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import Portfolio from '../components/Protfolio/Protfolio';
import Footer from '../components/Footer/Footer';

class PortfolioPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation Headtitle="PortfolioPage"/>
                <PageTop pageTitleAbout="My Portfolio"/>
                <Portfolio/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PortfolioPage;