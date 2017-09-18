import React from 'react';
import { Route } from 'react-router';
import ChecklistPage from '../ChecklistPage/ChecklistPage';
import './App.css';
import CityList from '../CityList/CityList';
import CityPage from '../CityPage/CityPage';
import ComparePage from '../ComparePage/ComparePage';
import NavHeader from '../NavHeader/NavHeader';
import Search from '../Search/Search'

const App = () => {
  return (
    <div className="App">
      <NavHeader />
      <Route exact path="/" component={ App, Search } />
      <Route exact path="/checklist" component={ ChecklistPage } />
      <Route exact path="/citylist"  component={ CityList } />
      <Route exact path="/citypage" component={ CityPage } />
      <Route exact path="/compare" component={ ComparePage} />
    </div>
  );
}

export default App;
