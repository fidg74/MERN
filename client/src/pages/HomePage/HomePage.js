import React, { useState, useEffect, useContext } from 'react'
import './HomePage.css'
import 'materialize-css'
import { Header } from '../../components/layout/Header/Header'

import {useHttp} from '../../hooks/http.hook'
import {AuthContext} from '../../auth/AuthContext'

const HomePage = () => {
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [link, setLink] = useState('')

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', {from: link}, {
                    Authorization: `Bearer ${auth.token}`
                  })
                console.log(data)
            } catch (err) {

            }
        }
    }
    return (
        <div className="container">
            <Header />
            <h1>Create Page</h1>
            <div className="input-field">
                <input
                placeholder="Вставьте ссылку"
                    id="link"
                    type="text"
                    name="link"
                    className="validate"
                    // value={link}
                    onChange={e => setLink(e.target.value)}
                    onKeyPress={pressHandler}
                    />
                <label htmlFor="link" className="">Вставьте ссылку</label>
            </div>
        </div>
    )
}

export default HomePage;