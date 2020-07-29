import React from 'react';
import Home from './components/Home.js';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <link href="http://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed|Alegreya:700" rel="stylesheet" type="text/css" />
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
