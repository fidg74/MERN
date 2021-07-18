import React from 'react'
import { Link } from 'react-router-dom';
import './HomePage.css'
import 'materialize-css'




const HomePage = () => {

    return (
        <div className="container">
            <h1>Home Page</h1>
            <Link to="/authorization" style={{marginRight: 20}}>Авторизация</Link>
            <Link to="/registration/admin">Регистрация</Link>
        </div>
    )
}

export default HomePage;