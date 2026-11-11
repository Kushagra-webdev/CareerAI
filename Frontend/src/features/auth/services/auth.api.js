import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    // baseURL: import.meta.env.VITE_API_URL || '/api',
    withCredentials: true
});
// withCredentials: true is used to allow server to read and set cookies
// by default using axios to send api to server, it doesnt have access to cookies.

// send api to backend

export async function register({username, email, password}) {
    try {
        const response = await api.post("/auth/register", {
            username, email, password
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function login({email, password}) {
    try {
        const response = await api.post("/auth/login", {
            email, password
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function logout() {
    try {
        const response = await api.get("/auth/logout");
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getMe() {
    try {
        const response = await api.get("/auth/get-me");
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}