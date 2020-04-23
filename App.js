import React from 'react';
import {Route} from 'react-router-dom';

import Header from './components/Header'
import Navigation from './components/Navigation'
import HomePage from './pages/home'



function App() {
  return (
    <div className="main">
      <Navigation/>
      <Header/>      
      <switch>
        <Route exact path="/" component={HomePage}/>        
      </switch>
    </div>
  );
}

export default App;

