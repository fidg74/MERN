import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './RegisterPage.css'
import 'materialize-css'
import {useHttp} from '../../hooks/http.hook'
import {useMessage} from '../../hooks/message.hook'

const RegisterPage = () => {
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        name: '', login: '', email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) {
            
        }
    }

    return (
        <div className="row">
            <div className="col s5 offset-s3">
                <h1>Registration Page</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Регистрация</span>
                        <div>
                            
                            <div className="input-field"> {/* Используется для перемещения лейбла */}
                                <input 
                                   id="name"
                                   type="text"
                                   name="name"
                                   className="validate white-text"
                                   onChange={changeHandler} />
                                <label htmlFor="name" className="white-text">Введите Имя</label>
                            </div>
                        <div className="input-field">
                            <input 
                                   id="login"
                                   type="text"
                                   name="login"
                                   className="validate white-text"
                                   onChange={changeHandler} />
                                <label htmlFor="login" className="white-text">Введите login</label>
                        </div>
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
                        style={{marginRight: 40}}
                        className="btn grey darken-2"
                        onClick={registerHandler}
                        disabled={loading}
                    >
                        Регистрация
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

export default RegisterPage;