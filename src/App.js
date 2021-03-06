import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
       <Navigation/>
    </Router>
  );
}

export default App;
