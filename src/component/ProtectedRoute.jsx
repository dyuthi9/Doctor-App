import { Navigate } from "react-router-dom";

function ProtectedRoute({childern}){
    let token = localStorage.getItem("token");
    return(
        <>
            {
                token ?(<div>{childern}</div>) : (<Navigate to="/login" replace/>)
            }
        </>
    )
}
export default ProtectedRoute;