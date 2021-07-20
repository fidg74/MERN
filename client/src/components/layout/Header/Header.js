import React, { useContext } from 'react'
import { NavLink, Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../../auth/AuthContext'
import { useAuth } from '../../../hooks/auth.hook';



export const Header = () => {
	const history = useHistory()
	const auth = useContext(AuthContext)

	const logoutHandler = event => {
		event.preventDefault()
		auth.logout()
		history.push('/')
	}

	const { token, login, logout, userID } = useAuth()
	const isAuth = token

	return (
		<nav>
			<div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
        <span className="brand-logo">Сокращение ссылок</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/create">Создать</NavLink></li>
          <li><NavLink to="/links">Ссылки</NavLink></li>
          <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
        </ul>
      </div>
		</nav>
	)
}