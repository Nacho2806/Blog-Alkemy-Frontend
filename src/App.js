import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import Navigation from './components/Navigation';
import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
       <Navigation/>
       <div className="container p-4">
        <Route path="/" exact component={Welcome}/>
       </div>
    </Router>
  );
}

export default App;
