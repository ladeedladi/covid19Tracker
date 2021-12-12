import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router,Route,Link, Routes} from 'react-router-dom'
import District from "./District"
import State from './state';
ReactDOM.render(
  <>
    <Router>
      <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="state" element={<State/>} />
      <Route exact path="/state/:dist" element={< District/>} />
      </Routes>
    </Router>
  </>
  ,document.getElementById('root')
);


