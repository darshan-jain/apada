import React from 'react';
import logo from './logo.svg';
import './App.css';
import TabPanel from './Tab.js';
import { HashRouter, Route, Link } from "react-router-dom";


function App() {
  return (
    <HashRouter basename='/'>
    <div className="App">
    <TabPanel/>
    </div>
    </HashRouter>
  
  );
}

export default App;
