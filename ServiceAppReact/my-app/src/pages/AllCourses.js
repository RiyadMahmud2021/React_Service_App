import React, { Component, Fragment } from 'react';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import ALLCourses  from '../components/ALLCourses/ALLCourses';
import Footer from '../components/Footer/Footer';

class AllCourses extends Component {
    render() {
        return (
            <Fragment>
                 <TopNavigation Headtitle="AllCourses"/>
                 <PageTop pageTitleAbout="All Courses"/>
                 <ALLCourses />
                 <Footer/>
            </Fragment>
           
        );
    }
} 

export default AllCourses;