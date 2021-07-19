import React from 'react'
import { Link } from 'react-router-dom';
import './HomePage.css'
import 'materialize-css'
import { useAuth } from '../../hooks/auth.hook';
import { Header } from '../../layout/Header/Header'



const HomePage = () => {

    const { token, login, logout, userID } = useAuth()
    const isAuth = token

    return (
        <div className="container">
            <Header />
            <h1>Home Page</h1>

            {isAuth ? <Link to="/mainPage">Выйти</Link> :
                <div>
                    <Link to="/authorization" style={{ marginRight: 20 }}>Авторизация</Link>
                    <Link to="/registration/admin">Регистрация</Link>
                </div>
            }
        </div>
    )
}

export default HomePage;