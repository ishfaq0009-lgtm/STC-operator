// import React from 'react'
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";

// const AdminProtectedLayout = ({children}) => {


//   let Navigate=useNavigate()

// useEffect(()=>{
//  async function check() {
//     let response = await axios.get("http://localhost:4000/user/checkMe",{withCredentials: true});
//     if(response.data.success)
//     {
//       console.log("This is tokenapi Working")
//     }
//     else{
//   Navigate("/")
//     }}
// check()
// },[])


//   return (
//     <div>
//       {children}
//     </div>
//   )
// }

// export default AdminProtectedLayout
