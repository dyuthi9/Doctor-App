import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/ContextData";

function Navbar(){
    let style={
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor:"rgb(199, 239, 255)",
        color:"black",
        border:"2px solid skyblue"
    }
    let button={
        backgroundColor:"white",
        color:"black",
        border:"2px solid skyblue"
    }
    let nav=useNavigate();
    // let token=localStorage.getItem("token");
    let {user,logoutUser}=useContext(UserContext);

    let logout=()=>{
        logoutUser();
        nav("/")
    }
    return(
        <div style={style}>
            <h1>Doctor Application</h1>
            <div >
                <button style={button}><Link to='/'>Home</Link></button> &nbsp;&nbsp;
                <button style={button} onClick={()=>nav("/addDoctor")}>Add Doctor</button>&nbsp;&nbsp;   
                {
                    user ?
                    (<button style={button} onClick={logout}>LogOut</button>)
                    :(<button style={button} onClick={()=>nav("/login")}>LogIn</button>)
                }
            </div>
        </div>
    )
}
export default Navbar;