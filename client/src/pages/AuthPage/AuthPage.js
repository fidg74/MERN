import React, { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './AuthPage.css'
import 'materialize-css'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { AuthContext } from '../../auth/AuthContext'


const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        login: '', email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...form })
            auth.login(data.token, data.userID)
        } catch (e) { }
    }

    return (
        <div className="container">
            <div className="col s6 offset-s3">
                <h1>Authorization Page</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                            </div>
                            <div className="input-field">
                                <input
                                    id="login"
                                    type="text"
                                    name="login"
                                    className="validate white-text"
                                    value={form.login}
                                    onChange={changeHandler} />
                                <label htmlFor="login" className="white-text">Введите login</label>
                            </div>
                            <div className="input-field">
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="validate white-text"
                                    value={form.password}
                                    onChange={changeHandler} />
                                <label htmlFor="password" className="white-text">Введите пароль</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button

                            className="btn yellow darken-3"
                            style={{ marginRight: 40 }}
                            disabled={loading}
                            onClick={loginHandler}
                        >
                            Войти
                        </button>
                        <Link to="/">
                            <button
                                className="btn orange darken-2"
                            >
                                Назад
                            </button>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AuthPage;