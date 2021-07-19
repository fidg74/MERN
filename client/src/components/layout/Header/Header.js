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
			<div class="nav-wrapper">
				<ul id="nav-mobile" class="right hide-on-med-and-down">
					<li><NavLink to="/" >Главная</NavLink></li>
					<li><NavLink to="/aboutPage" >About</NavLink></li>
					{isAuth ? <li><a href="/" onClick={logoutHandler}>Выйти</a></li> :
						
							<li><Link to="/authorization">Войти</Link></li>
							
						
					}
				</ul>
			</div>
		</nav>
	)
}