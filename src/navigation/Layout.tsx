import NavMenu from './NavMenu';

import { Component, ReactNode } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';


export default class Layout extends Component<ReactNode | undefined> {

    render() {
        return (
            <BrowserRouter>
            <div>
                <NavMenu />
                <Container>
                    {this.props.children}
                </Container>
            </div>
            </BrowserRouter>
        );
    }
    
}
