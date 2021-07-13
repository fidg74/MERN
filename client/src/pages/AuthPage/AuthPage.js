import React, {useState} from 'react'
import './AuthPage.css'
import 'materialize-css'

const AuthPage = () => {

    const [form, setForm] = useState({
        email: '', password: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Authorization Page</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div class="input-field">
                            <input 
                                //    placeholder="Введите email"
                                   id="email"
                                   type="text"
                                   className="validate white-text"
                                   onChange={changeHandler} />
                                <label htmlFor="email" className="white-text">Введите email</label>
                            </div>
                            <div class="input-field">
                                <input 
                                    id="password"
                                    type="password" 
                                    className="validate white-text"
                                    onChange={changeHandler} />
                                <label htmlFor="password" className="white-text">Введите пароль</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-3" style={{marginRight: 10}}>Войти</button>
                        <button className="btn grey darken-2">Регистрация</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AuthPage;