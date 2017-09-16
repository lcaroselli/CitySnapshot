import React from 'react';
import './App.css';
import NavHeader from '../NavHeader/NavHeader';
import CityList from '../CityList/CityList';
import ComparePage from '../ComparePage/ComparePage';
import ChecklistPage from '../ChecklistPage/ChecklistPage';
import CityPage from '../CityPage/CityPage';
import Search from '../Search/Search'
import { Route } from 'react-router';

const App = () => {
  return (
    <div className="App">
      <NavHeader />
      <Route exact path="/" component={ App, Search } />
      <Route exact path="/citylist"  component={ CityList } />
      <Route exact path="/compare" component={ ComparePage} />
      <Route exact path="/checklist" component={ ChecklistPage } />
      <Route exact path="/citypage" component={ CityPage } />
    </div>
  );
}

export default App;
