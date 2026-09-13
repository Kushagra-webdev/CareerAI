import { createContext, useState } from "react";

export const AuthContext = createContext();

// gives access of user, setUser, isLoading, setIsLoading to all the child components
// React context is a way to pass data through the component tree without having to pass props down manually at every level.

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // in production its set true
    
    return(
        <AuthContext.Provider value={{user, setUser, loading, setLoading}}>
            {children}
        </AuthContext.Provider>
    );
}
