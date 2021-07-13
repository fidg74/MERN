import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {

  const [isAuth, setIsAuth] = useState(true)

  return (
    <div className="wrapper">
      <Router>
        <Switch>
        <Route path="/" exact component={HomePage} />
        {isAuth &&
          <>
            <Route path="/auth" component={AuthPage} />
            <Route path="/register" component={RegisterPage} />
          </>
        } else {
          <Redirect to="/" />
        }
        </Switch>
      </Router>
      
    </div>
    
  )
}

export default App;
