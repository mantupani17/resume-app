import { createContext, useEffect, useState } from "react"
import { AuthServices } from "../services/auth"
export const AuthContext = createContext('user')

const AuthContextProvider  = ({children}) => {
    const [ user, setUser ] = useState(null)
    const token = window.localStorage.getItem('token')
    useEffect(()=>{
        if(token) {
            AuthServices.profile(token).then((res)=>{
                setUser(res)
            })
        }
    },[])
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

const withAuthContext = (Child) => (props) => (
    <AuthContext.Consumer>
        {(context)=> <Child {...props} {...context}/>}
    </AuthContext.Consumer>
)

export { AuthContextProvider, withAuthContext };