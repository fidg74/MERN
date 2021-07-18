import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {useRoutes} from './routes'
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';



function App() {
  const {token, login, logout, userID} = useAuth()
  const isAuth = !!token
  const routes = useRoutes(isAuth)

  return (
    <AuthContext.Provider value={{token, login, logout, userID, isAuth}}>
      <Router>
        <Switch>
            {routes}
        </Switch>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;
