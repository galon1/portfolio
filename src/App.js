import React from 'react';
import Projects from './components/Projects.js';
import Home from './components/Home.js';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation.js'

function App() {
  console.log("in App")
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
