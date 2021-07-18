import React from 'react'
import { Link } from 'react-router-dom';
import './MainPage.css'
import 'materialize-css'
import {Header} from '../../layout/Header/Header'

const MainPage = () => {
    return (
        <div className="container">
            <Header></Header>
            <h1>Main Page</h1>
            <p>Authorization done</p>
            <Link to="/aboutPage">About</Link>
        </div>
    )
}

export default MainPage;