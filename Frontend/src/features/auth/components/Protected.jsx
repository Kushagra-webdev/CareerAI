import { useAuth } from "../hooks/auth";
import { Navigate } from "react-router";
import { Loader } from "lucide-react";


export default function ProtectedRoute({children}) {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-100 via-sky-50 to-emerald-100 text-slate-700 font-sans p-6 sm:p-10 relative overflow-hidden">
                <Loader className="animate-spin w-12 h-12 text-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
        )
    }
    // if user is null (not logged in), redirect to login page
    if(!user){
        return <Navigate to="/login" replace />
    }
    // if user is logged in, render the children (the page they are trying to access)
    return children;
}