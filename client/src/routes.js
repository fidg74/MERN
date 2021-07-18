import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import MainPage from './pages/MainPage/MainPage';
import AuthPage from './pages/AuthPage/AuthPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

export const useRoutes = isAuth => {
    
    if (isAuth) {
        return (
            <Switch>
                <Route exact path="/main" component={MainPage} />
              
                {/* <Redirect to="main" /> */}
            </Switch>
        )
    }
    
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/auth" component={AuthPage} />
            <Route path="/register" component={RegisterPage} />
            <Redirect to="/" />
        </Switch>
    )

    
}