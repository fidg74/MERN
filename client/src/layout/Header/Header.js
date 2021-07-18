import React, { useContext } from 'react'
import { NavLink, Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'



export const Header = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
        <div class="nav-wrapper">
          <Link href="/" class="brand-logo">Logo</Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><NavLink to="/mainPage/user=/:id" >Главная</NavLink></li>
            <li><NavLink to="/aboutPage" >About</NavLink></li>
            <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
          </ul>
        </div>
      </nav>
    )
}

