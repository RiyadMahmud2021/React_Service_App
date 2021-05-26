import React, { Component, Fragment } from 'react';
import ServicePage from '../pages/ServicePage';
import Home from '../pages/Home';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import AllCourses from '../pages/AllCourses';
import About from '../pages/About';
import { Route, Switch } from 'react-router-dom';


 
class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/service" component={ServicePage}/>
                    <Route exact path="/courses" component={AllCourses}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={About}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRouter;