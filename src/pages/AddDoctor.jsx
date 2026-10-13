import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddDoctor(){
    let [name,setName]=useState("");
    let [salary,setSalary]=useState("");
    let [gender,setGender]=useState("");
    let [age,setAge]=useState("");
    let [specialization,setSepcialization]=useState("");
    let nav=useNavigate();

    let handleSubmit =async(e)=>{
        e.preventDefault();
        console.log("Name : "+name);
        console.log("Salary : "+salary);
        console.log("Age : "+age);
        console.log("Gender : "+gender);
        console.log("Specialization : "+specialization);

        let newDoctor={name,salary,gender,age,specialization};

        let result=await axios.post("https://api-bdti.onrender.com/doctors/",newDoctor);//post the data 

        alert('Doctor Added Successfully.')

        setName("");
        setSalary("");
        setGender("");
        setAge("");
        setSepcialization("");
        nav("/")
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