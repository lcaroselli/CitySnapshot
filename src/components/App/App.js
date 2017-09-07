import React, { Component } from 'react';
import './App.css';
import NavHeader from '../NavHeader/NavHeader';

export default class App extends Component {
  constructor(){
    super();
  }

  // componentDidMount() {
	// 	this.props.fetchData(
	// 		`URLHERE`
	// 	);
  // }

  render() {

    return (
      <div className="App">
        <NavHeader />
      </div>
    );
  }
}
