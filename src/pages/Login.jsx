import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {UserContext} from "../context/ContextData";

function Login(){
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let nav=useNavigate();
    let {loginUser}=useContext(UserContext)

    let handleLogin= async(e)=>{
        try{
        e.preventDefault();

        console.log("Email : "+email);
        console.log("Password : "+password);

        let res =await axios.post("https://api-bdti.onrender.com/login",{email,password})
        console.log(res);

        if(res.status===200){
            loginUser(email);
            nav("/")
            // localStorage.setItem("token",res.data.patient.email);
        }
        setEmail("");
        setPassword("");
        }catch(e){
            console.log(e);
            
        }
    }

    return(
        <>
        <center>
        <form onSubmit={handleLogin} className="card1">
            <h1>Login Page : </h1>
            <input className="input1" type="email" placeholder="Enter the Email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <h1>Password : </h1>
            <input className="input1" type="password" placeholder="Enter the Password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br>
            <br></br>
            <input className="button2" type="submit" />
        </form>
        </center>
        </>
    )
}
export default Login;