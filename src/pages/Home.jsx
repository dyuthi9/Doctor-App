import { useEffect, useState } from "react";

import axios from "axios";
import DoctorCard from "../component/DoctorCard";

function Home() {
    let [data, setData] = useState([]);
    let [search, setSearch] = useState("");
    //   useEffect(()=>{
    //      let res = fetch("https://api-bdti.onrender.com/doctors")
    //      .then(resp => resp.json())
    //      .then(result => {setData(result)})
    //      .catch(error => console.log(error))
    //      console.log(res);

    //   },[])
    useEffect(() => {
        async function getDetails() {
            try {
                let res = await axios.get("https://api-bdti.onrender.com/doctors")
                setData(res.data);

            } catch (e) {
                console.log(e);
            }
        }
        getDetails();
    }, [])
    let filteredData = data.filter((d) => {
        let datafilter = d.name.toLowerCase().includes(search.toLowerCase());
        return datafilter;
    });
    return (
        <>
            <div className="box">
                <label>Search for doctors:</label>
                <input type="text" onChange={(e) => { setSearch(e.target.value) }} value={search} />
            </div>
            <div className="container">
                {
                    filteredData.length > 0 ?
                        filteredData.map((d) => {
                            return <DoctorCard key={d.id} name={d.name} salary={d.salary} gender={d.gender} age={d.age} specialization={d.specialization} />;
                        }) : <h1>No doctors found</h1>
                }
            </div>
        </>
    )
}
export default Home;