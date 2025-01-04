import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Authcontext = createContext();

function AuthContextProvider({ children }) {
    const [user, setuser] = useState();
    const navigate = useNavigate();
    useEffect(async () => {
        const token = localStorage.getItem('token')
        if (!token) { setuser(null); navigate('/login') }
        const response = await axios.get(`${process.env.REACT_APP_API_URL}users/home`, { headers: { Authorization: `Bearer ${token}` } })
        
    }, [])

    return <>
        <Authcontext.Provider>
            {children}
        </Authcontext.Provider>
    </>
}
export default AuthContextProvider;