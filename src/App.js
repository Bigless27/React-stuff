import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import ConfirmationPage from "./components/pages/ConfirmationPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage";
import TopNavigation from "./components/navigation/TopNavigation";

const App = ({ location }) => (
  <div className="ui container">
    <TopNavigation />
    <Route location={location} path="/" exact component={HomePage} />
    <Route location={location} path="/confirmation/:token" exact component={ConfirmationPage} />
    <GuestRoute location={location} path="/login" component={LoginPage} />
    <GuestRoute location={location} path="/signup" component={SignupPage} />
    <GuestRoute location={location} path="/forgot_password" component={ForgotPasswordPage} />
    <GuestRoute location={location} path="/reset_password/:token" component={ResetPasswordPage} />
    <UserRoute location={location} path="/dashboard" component={DashboardPage} />
  </div>
);

// update blockers with react redux connect and react router.

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
