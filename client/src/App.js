import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './auth/AuthContext';

import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  const { token, login, logout, userID } = useAuth()
  const isAuth = token

  return (
    <AuthContext.Provider value={{ token, login, logout, userID }}>
      <Router>
        <Switch>
          {isAuth &&
            <>
              <Route path="/" exact component={HomePage} />
              <Route exact path="/mainPage" component={MainPage} />
              <Route exact path="/aboutPage" component={AboutPage} />
              <Redirect to="/mainPage" />
            </>
          }
          <Route path="/" exact component={HomePage} />
          <Route path="/authorization" component={AuthPage} />
          <Route path="/registration/admin" component={RegisterPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;
