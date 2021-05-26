import React, {Component,Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/other.css';

class TopNavigation extends Component {

    constructor(props){
        super();
        this.state ={
            navBarTitle:"navTitle",
            navBarBack:"navBackground",
            navBarItem:"navItem",
            navVariant:"dark",
            PageHeadtitle: props.Headtitle,
        }
    }
 
    onScroll=()=>{
        // onClick ar vitor arrow function use kora hoisa
        if(window.scrollY>100){
            this.setState({ navVariant:'light', navBarTitle:'navTitleScroll',navBarBack:"navBackgroundScroll",navBarItem:"navItemScroll"})
        }
        else if(window.scrollY<100){
            this.setState({ navVariant:'dark',navBarTitle:'navTitle',navBarBack:"navBackground",navBarItem:"navItem"})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll) 
}

    render() {
        return (
            <Fragment>
                <title>{this.state.PageHeadtitle}</title>
                <Navbar className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg"  variant={this.state.navVariant}>
                    <Navbar.Brand  className={this.state.navBarTitle}>𝓐𝓵-𝓐𝓺𝓼𝓪 𝓘𝓣</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav btn btn-primary" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link><NavLink exact activeStyle={{color:'#6075f0'}} className={this.state.navBarItem} to="/">Home</NavLink>              </Nav.Link> 
                            <Nav.Link><NavLink exact activeStyle={{color:'#6075f0'}}className={this.state.navBarItem}to="/service">Service</NavLink>     </Nav.Link> 
                            <Nav.Link><NavLink exact activeStyle={{color:'#6075f0'}}className={this.state.navBarItem} to="/courses">Courses</NavLink>    </Nav.Link> 
                            <Nav.Link><NavLink exact activeStyle={{color:'#6075f0'}}className={this.state.navBarItem} to="/portfolio">Portfolio</NavLink></Nav.Link> 
                            <Nav.Link><NavLink exact activeStyle={{color:'#6075f0'}}className={this.state.navBarItem} to="/contact">Contact</NavLink>    </Nav.Link> 
                            <Nav.Link><NavLink exact activeStyle={{color:'#6075f0'}}className={this.state.navBarItem} to="/about">About</NavLink>        </Nav.Link> 
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;