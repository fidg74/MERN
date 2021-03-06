import React from 'react'
import { Link } from 'react-router-dom';
import './MainPage.css'
import 'materialize-css'

import {Header} from '../../components/layout/Header/Header'

const MainPage = () => {
    return (
        <div className="container">
            <Header></Header>
            <h1>Main Page</h1>
            <p>Authorization done</p>
            <Link to="/">Домой</Link>
        </div>
    )
}

export default MainPage;