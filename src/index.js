import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, NavLink} from 'react-router-dom'
import './index.css';
import App from './App';
import Question from './Question';
import About from './About'
import Learn from './Learn';
import notfound from './notfound';

import * as serviceWorker from './serviceWorker';

/*const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


require('dotenv').config({
  path: path.join(__dirname, './settings.env'),
});

const app = express();
mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true });
app.use(bodyParser.json())
app.get('/', (req, res) => res.send('Hello MongoDb!'));

app.listen(3000, () => console.log('It works!'));
*/


const routing = (
  <Router>
    <div>
    <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">About</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/learn">Learn</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/questions">Take the test</NavLink>
        </li>
      </ul>
      <Switch><Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/learn" component={Learn} />
      <Route path="/questions" component={Question} />
      <Route component={notfound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
