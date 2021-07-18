import { useState, useCallback, useEffect } from "react"


const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState()
    const [userID, setUserID] = useState()

    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserID(id)

        localStorage.setItem(storageName, JSON.stringify({
            userID: id, token: jwtToken
        }))
    }, [])

    const logout = useCallback(() => {
        setToken()
        setUserID()
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login(data.token, data.userID)
        }
    }, [login])

    return { login, logout, token, userID }
}