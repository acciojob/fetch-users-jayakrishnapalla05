
import React, { useState } from "react";
import './../styles/App.css';
import axios from "axios";

const App = () => {

  const [data, setData]=useState([]);

  function displayData(){
    axios.get('https://reqres.in/api/users')
    .then(response =>{
      setData(response.data.data)
      console.log(response.data.data)
    })
  }




  return (
    <div>
        {/* Do not remove the main div */}
        <button className="btn" onClick={displayData}>Get User List</button>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {
              (data.length===0)?<p>No Data found to display</p>:data.map(Element=>
              {
                return (
                  <tr>
                  <td>{Element.first_name}</td>
                  <td>{Element.last_name}</td>
                  <td>{Element.email}</td>
                  <td><img src={Element.avatar}/></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default App
