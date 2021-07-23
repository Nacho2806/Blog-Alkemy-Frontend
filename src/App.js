import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import store from './redux/store';

import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import Home from './components/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
       <Navigation/>
       <div className="container p-4">
        <Route path="/" exact component={Welcome}/>
        <Route path="/home" exact component={Home}/>
       </div>
      </Router>
    </Provider>
  );
}

export default App;
