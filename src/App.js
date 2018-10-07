import React, { Component } from 'react';
import './App.scss';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Projects from './Projects';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cv from './Cv';
import ProjectDetail from './ProjectDetail';

class App extends Component {
  render() {

    return (<Router>
      <div>
        <div className="mb-5">
          <Navbar />
          <Jumbotron />
          <div className="container">
            <div className="row">
              <Route exact path="/" component={Projects} />
              <Route exact path="/about" component={Cv} />
              <Route path="/detail/:id" component={ProjectDetail} />
            </div>
          </div>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
