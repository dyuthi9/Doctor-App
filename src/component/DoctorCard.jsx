function DoctorCard(props){
    return(
        <div>
            <h3>Name : {props.name} </h3>
            <h3>Salary : {props.salary} </h3>
            <h3>Gender : {props.gender}</h3>
            <h3>Age : {props.age} </h3>
            <h3>Specialization : {props.specialization}</h3>
            <hr></hr>
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