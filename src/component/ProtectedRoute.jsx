
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/ContextData";
import { useContext } from "react";

function ProtectedRoute({ children }) {
   // let token = localStorage.getItem("token");
   let {user} =useContext(UserContext);
    return (
        <>
            {
                user ? (
                    children
                ) : (
                    <Navigate to="/login" replace />
                )
            }
        </>
    );
}

export default ProtectedRoute;
