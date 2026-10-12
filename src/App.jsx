// function App(){
//   let name= "Laya";
//   let place="Hyderabad";
//   return(
//     <>
//     <h1>Welcome to React JS</h1>
//     <p>Good Evening</p>
//     <h3>Name : {name}</h3>
//     <h3>Place : {place}</h3>
//     </>
//   )
// }



//  export default App;


// import React from "react";

// class App extends React.Component{
//   data="HelloWorld"
//   render(){
//     let name = "Laya";
//     let place = "Hyderabad";
//     return(
//       <div>
//         <h1>{this.data}</h1>
//         <h2>Welcome to React JS</h2>
//         <h3>Good Evening</h3>
//         <h4>Name : {name}</h4>
//         <h5>Place : {place}</h5>
//       </div>
//     )
//   }
// }
// export default App;


import Navbar from "./component/Navbar"
import AddDoctor from "./pages/AddDoctor"
import Home from "./pages/Home"
// import useState from "react";
// import filteredData from "./pages/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import UpdateDoctor from "./pages/UpdateDoctor"
import PageNotFound from "./pages/PageNotFound";
import "./App.css"

function App() {
  // let [data,setData]=useState([]);
  // let [search,setSearch]=useState("");
  // useEffect(()=>{
  //   let res=fetch("https://api-bdti.onrender.com/doctors")
  //               .then((resp) => resp.json())
  //     .then((result) => {setData(result); console.log(result);})
  //               .catch(error=>console.log(error))
  //               console.log(res);
  // },[]);
  // let filterDoctor=data.filter((d)=>{
  //   let dataFilter=d.name.toLowerCase().includes(search.toLowerCase());
  //   return dataFilter;

  // });


  return(
    <>
    <BrowserRouter>
    <Navbar/>
    {/* <DoctorCard name="Dyuthi" gender="Female" age={25} salary={500000} specialization="ENT"/>
    <hr></hr>
    <DoctorCard name="Sadhika" gender="Female" age={25} salary={500000} specialization="Cardio"/>
    <hr></hr>
    <DoctorCard name="Revathi" gender="Female" age={25} salary={500000} specialization="Eye"/>
    <hr></hr> */}
    {/* <AddDoctor/> */}

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/addDoctor' element={<AddDoctor/>}></Route>
      <Route path='/updateDoctor/:id' element={<UpdateDoctor/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
    </BrowserRouter>
    {/* <label>Enter the Doctor Name :</label>
    <input type="text" onChange={(e)=>{setSearch(e.target.value)}} value={search} />
    {
      filterDoctor.length>0?
      filterDoctor.map((d)=>(
        <DoctorCard key={d.id} name={d.name} salary={d.salary} gender={d.gender} age={d.age}  specialization={d.specialization}/>       
      )):<h1>No Doctors Found.</h1>
    } */}
    </>
  )
}
export default App;