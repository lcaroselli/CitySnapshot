import React from 'react';
import './App.css';
import NavHeader from '../NavHeader/NavHeader';
import CityList from '../CityList/CityList';
import ComparePage from '../ComparePage/ComparePage';
import ChecklistPage from '../ChecklistPage/ChecklistPage';
import Search from '../Search/Search'
import { Route } from "react-router";

const App = () => {
  return (
    <div className="App">
      <NavHeader />
      <Route exact path="/" component={ App, Search } />
      <Route exact path="/citylist"  component={ CityList } />
      <Route exact path="/compare" component={ ComparePage} />
      <Route exact path="/checklist" component={ ChecklistPage } />
    </div>
  );
}

export default App;
