import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import CitysList from './components/citysList';
import City from './components/city';


function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <CitysList/>

    </React.Fragment>
  );
}

export default App;
