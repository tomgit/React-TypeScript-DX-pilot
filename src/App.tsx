import React from 'react';

import './css/App.css';

//import 'devextreme/dist/css/dx.light.css';
import 'devextreme/dist/css/dx.darkmoon.css';

import Login from './pages/Login';
import Error from './pages/Error';
import Layout from './navigation/Layout';

import { Route } from "react-router-dom";

//samples
import { DXPTreeList } from './pages/samples/DXPTreeList';
import { DXPDataGrid } from './pages/samples/DXPDataGrid';
 

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <Route exact path='/' render={() => <Login/>}/>
          <Route path='/dxpdatagrid' render={() => <DXPDataGrid/>}/>
          <Route path='/dxptreelist' component = {DXPTreeList}/>
          <Route path='/error' component = {Error}/>
        </Layout>
      </div>
    );
  }
  
};