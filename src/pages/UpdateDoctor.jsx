import { useParams } from "react-router-dom";

function UpdateDoctor() {
    let {id} = useParams();
  return (
    <>
    <h1>Welcome to doctor update page....</h1>
    <h1>Doctor ID: {id}</h1>
    </>
  )
}
export default UpdateDoctor;