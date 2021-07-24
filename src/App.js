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
import Posts from './components/Posts';

function App() {
  return (
    <Provider store={store}>
      <Router>
       <Navigation/>
       <div className="container p-4">
        <Route path="/" exact component={Welcome}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/create" exact component={Posts}/>
        <Route path="/edit/:id" exact component={Posts}/>        
       </div>
      </Router>
    </Provider>
  );
}

export default App;
