import React from 'react'
import './HomePage.css'
import 'materialize-css'
import { Link } from 'react-router-dom';



const HomePage = () => {

    return (
        <div className="container">
            <h1>Home Page</h1>
            {/* {isAuth ? <button>{user.name}</button> : <button>{user.id}</button>} */}
            <Link to="/auth" style={{marginRight: 20}}>Авторизация</Link>
            <Link to="/register">Регистрация</Link>
        </div>
    )
}

export default HomePage;