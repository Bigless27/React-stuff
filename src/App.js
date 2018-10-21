import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

const App = ({ location }) => (
  <div className="ui container">
    <Route location={location}  path="/" exact component={HomePage} />
    <GuestRoute location={location} path="/login"  component={LoginPage} />
    <GuestRoute location={location} path="/signup" component={SignupPage} />
    <UserRoute location={location}   path="/dashboard"  component={DashboardPage} />
  </div>
);

// update blockers with react redux connect and react router.

App.propTypes = {
  location:  PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
