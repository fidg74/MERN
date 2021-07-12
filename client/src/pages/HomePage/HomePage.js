import React, {useState} from 'react'
import './HomePage.css'
import 'materialize-css'



const HomePage = () => {

    const user = {
        id: 1,
        name: 'Илья'
    }

    const [isAuth, setIsAuth] = useState(true)

    return (
        <div className="container">
            <h1>Home Page</h1>
            {isAuth ? <button>{user.name}</button> : <button>{user.id}</button>}
        </div>
    )
}

export default HomePage;