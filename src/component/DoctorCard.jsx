import { useNavigate } from "react-router-dom";


function DoctorCard(props){
    let navigator=useNavigate();
    let user=localStorage.getItem("token");
    return(
        <div className="card">
            <h3>Name : {props.name} </h3>
            <h3>Salary : {props.salary} </h3>
            <h3>Gender : {props.gender}</h3>
            <h3>Age : {props.age} </h3>
            <h3>Specialization : {props.specialization}</h3>
            {
                user ? (
                    <>
                    <button className="button1" style={{backgroundColor:"white"}} onClick={()=>navigator(`/updateDoctor/${props.id}`)}>Update </button>
            <button className="button1" style={{backgroundColor:"lightcoral"}} onClick={()=>props.handleDelete(props.id)}>Delete </button>
            </>
        ) : ""
            }
            
        </div>
    )
}
export default DoctorCard;

// function DoctorCard({name,salary,gender,age,specialization}){
//     return(
//         <div>
//             <h3>Name : {name} </h3>
//             <h3>Salary : {salary} </h3>
//             <h3>Gender : {gender}</h3>
//             <h3>Age : {age} </h3>
//             <h3>Specialization : {specialization}</h3>
//         </div>
//     )
// }
// export default DoctorCard;