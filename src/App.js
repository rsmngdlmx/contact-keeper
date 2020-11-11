import './App.css';
import { Fragment } from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import ContactState from './context/contact/contactState';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_BASE_URL;

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path={ `${baseUrl}` } component={ Home } />
              <Route exact path={ `${baseUrl}about` } component={ About } />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
}

export default App;
