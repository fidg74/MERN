import React, {useEffect, useState} from 'react'
import './AuthPage.css'
import 'materialize-css'
import {useHttp} from '../../hooks/http.hook'

const AuthPage = () => {
    const {loading, request} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {

    }, [error])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log('ПЕССССССССССССССС', data)
        } catch (e) {
            console.log(e.message)
        }
    }

    // const loginHandler = async () => {
    //     try {
    //       const data = await request('/api/auth/login', 'POST', {...form})
    //       auth.login(data.token, data.userId)
    //     } catch (e) {}
    //   }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Authorization Page</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                            <input 
                                   id="email"
                                   type="text"
                                   name="email"
                                   className="validate white-text"
                                   onChange={changeHandler} />
                                <label htmlFor="email" className="white-text">Введите email</label>
                            </div>
                            <div className="input-field">
                                <input 
                                    id="password"
                                    type="password" 
                                    name="password"
                                    className="validate white-text"
                                    onChange={changeHandler} />
                                <label htmlFor="password" className="white-text">Введите пароль</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button 
                            className="btn yellow darken-3" 
                            style={{marginRight: 10}} 
                            disabled={loading}
                        >
                            Войти
                        </button>
                        <button 
                            className="btn grey darken-2"
                            onClick={registerHandler}
                                disabled={loading}
                        >
                                Регистрация
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AuthPage;