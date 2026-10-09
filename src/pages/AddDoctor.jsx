import { useState } from "react";

function AddDoctor(){
    let [name,setName]=useState("");
    let [salary,setSalary]=useState("");
    let [gender,setGender]=useState("");
    let [age,setAge]=useState("");
    let [specialization,setSepcialization]=useState("");

    let handleSubmit =(e)=>{
        e.preventDefault();
        console.log("Name : "+name);
        console.log("Salary : "+salary);
        console.log("Age : "+age);
        console.log("Gender : "+gender);
        console.log("Specialization : "+specialization);

        setName("");
        setSalary("");
        setGender("");
        setAge("");
        setSepcialization("");
    } 
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Add Doctor</h1>
                <input type="text" placeholder=" Enter Your Name " value={name} onChange={(e)=>{setName(e.target.value)}} /><br/><br/>
                <input type="text" placeholder=" Enter Your Salary " value={salary} onChange={(e)=>{setSalary(e.target.value)}}/><br/><br/>
                <input type="text" placeholder=" Enter Your Gender " value={gender} onChange={(e)=>{setGender(e.target.value)}}/><br/><br/>
                <input type="text" placeholder=" Enter Your Age " value={age} onChange={(e)=>{setAge(e.target.value)}}/><br/><br/>
                <input type="text" placeholder=" Enter Your Sepcialization " value={specialization} onChange={(e)=>{setSepcialization(e.target.value)}}/><br/><br/>
                <input type="submit"  />

            </form>
        </div>
    )
}
export default AddDoctor;