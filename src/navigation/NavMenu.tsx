import { Component } from 'react';
import { Container, Navbar, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import AppLogo from "./images/AppLogo.png";
import '../css/NavMenu.css';


export default class NavMenu extends Component {

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                    <NavLink tag={Link} className="text-light" to="/">
                    <img src={AppLogo} width="388" height="53" alt=""/>
                    </NavLink>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-light" to="/dxpdatagrid">DataGrid</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-light" to="/dxptreelist">TreeList</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-light" to="/" >Kijelentkezés</NavLink>
                                </NavItem>
                            </ul>
                    </Container>
                </Navbar>
            </header>
        );
    }
    
}
