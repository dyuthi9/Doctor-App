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
    return(
        <div style={style}>
            <h1>Doctor Application</h1>
            <div >
                <button style={button}>Home</button> &nbsp;&nbsp;
                <button style={button}>Add Doctor</button>
            </div>
        </div>
    )
}
export default Navbar;