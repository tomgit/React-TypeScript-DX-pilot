import { Component } from 'react';

export default class Error extends Component {

  render () {
    return (
      <div>
        <p>Az API szerver pillanatnyilag nem elérhető.</p>
        <p>Request: {window.sessionStorage.getItem('request')}</p>
      </div>
    );
  }

}
