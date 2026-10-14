import { useEffect, useState } from "react";

import axios from "axios";
import DoctorCard from "../component/DoctorCard";
import { useNavigate } from "react-router-dom";

function Home() {
    let [data, setData] = useState([]);
    let [search, setSearch] = useState("");
    let nav = useNavigate();
    //   useEffect(()=>{
    //      let res = fetch("https://api-bdti.onrender.com/doctors")
    //      .then(resp => resp.json())
    //      .then(result => {setData(result)})
    //      .catch(error => console.log(error))
    //      console.log(res);

    //   },[])

    async function getDetails() {
        try {
            let res = await axios.get("https://api-bdti.onrender.com/doctors")
            setData(res.data);

        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getDetails();
    }, [])
    let filteredData = data.filter((d) => {
        let datafilter = d.name.toLowerCase().includes(search.toLowerCase());
        return datafilter;
    });

    let handleDelete = async (id) => {
        try {
            // let deleteData=
            await axios.delete(`https://api-bdti.onrender.com/doctors/${id}`)
            alert("Doctor Details Deleted successfully.")
            nav("/");
            getDetails();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <div className="box">
                <label>Search for doctors:</label>
                <input className="input1" type="text" onChange={(e) => { setSearch(e.target.value) }} value={search} />
            </div>
            <div className="container">
                {
                    filteredData.length > 0 ?
                        filteredData.map((d) => {
                            return <DoctorCard key={d.id} id={d.id} name={d.name} salary={d.salary} gender={d.gender} age={d.age} specialization={d.specialization} handleDelete={handleDelete} />;
                        }) : <h1>No doctors found</h1>
                }
            </div>
        </>
    )
}
export default Home;