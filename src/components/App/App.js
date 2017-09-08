import React, { Component } from 'react';
import './App.css';
import NavHeader from '../NavHeader/NavHeader';
import Search from '../Search/Search';

export default class App extends Component {
  constructor(){
    super();
  }

  render() {

    return (
      <div className="App">
        <NavHeader />
        <Search />
      </div>
    );
  }
}
