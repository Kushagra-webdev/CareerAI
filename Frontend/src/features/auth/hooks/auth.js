import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api";

export const useAuth = () => {
    const context = useContext(AuthContext);
    const { user, setUser, loading, setLoading } = context;

    const handleLogin = async ({ email, password }) =>{
        setLoading(true);
        // gets the res sent by the backend api of login
        try {
            const data = await login({ email, password });
            setUser(data.user);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    const handleRegister = async ({ username, email, password}) =>{
        setLoading(true);
        // gets the res sent by the backend api of register
        try {
            const data = await register({ username, email, password });
            setUser(data.user);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    const handleLogout = async () =>{
        setLoading(true);
        try {
            await logout();
            setUser(null);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    } 

    const fetchMe = async () =>{
        setLoading(true);
        const data = await getMe();
        setUser(data.user);
        setLoading(false);
    }

    // after the page refresh the states are set to intial values, thats why after logging in and refreshing the page it will redirect to login page
    // useEffect is used to fetch the user data from the server and set the user state to that data
    useEffect(() => {
        const getAndSetUser = async() => {
            try{
                const data = await getMe();
                setUser(data.user);
            } catch(err){
                console.log(err);
                setUser(null);
            } finally {
                setLoading(false);
            }
        }
        getAndSetUser();
    }, [])

    return { user, loading, handleLogin, handleRegister, handleLogout, fetchMe };
}