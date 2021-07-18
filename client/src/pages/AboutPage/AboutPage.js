import React from 'react'
import { Link } from 'react-router-dom';
import './AboutPage.css'
import 'materialize-css'

import {Header} from '../../layout/Header/Header'



const AboutPage = () => {

    return (
        <div className="container">
            <Header />
            <h1>About Page</h1>
            <Link to="/mainPage/user=/:id">Main page</Link>
        </div>
    )
}

export default AboutPage;