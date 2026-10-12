import { Link,useNavigate } from "react-router-dom";

function Navbar(){
    let style={
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor:"skyBlue",
        color:"blue",
        border:"2px solid blue"
    }
    let button={
        backgroundColor:"white",
        color:"blue",
        border:"2px solid blue"
    }
    let nav=useNavigate();
    return(
        <div style={style}>
            <h1>Doctor Application</h1>
            <div >
                <button style={button}><Link to='/'>Home</Link></button> &nbsp;&nbsp;
                <button style={button} onClick={()=>nav("/addDoctor")}>Add Doctor</button>
            </div>
        </div>
    )
}
export default Navbar;