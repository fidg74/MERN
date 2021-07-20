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
              <Route path="/create" exact component={HomePage} />
              <Route exact path="/links" component={MainPage} />
              <Route exact path="/detail/:id" component={AboutPage} />
              <Redirect to="/create" />
            </>
          }
          {/* <Route path="/" exact component={HomePage} /> */}
          <Route path="/" exact component={AuthPage} />
          <Route path="/registration/admin" component={RegisterPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;
