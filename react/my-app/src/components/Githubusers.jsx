import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';

export default function Githubusers() {
  const [users, setUsers] = useState([]);
  const [totalusers, settotalUsers] = useState(0);// stroe data

//--fech data from api call
  // useEffect(() => {
  //   async function fetchgithubusers() {
  //     try {
  //       const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //       const data = await response.json();
  //       console.log(data);
  //       setUsers(data);
  //       settotalUsers(data.length);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchgithubusers();
  // }, []);


  //--third party axois instead of fetch function----
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response )=> {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(error => { console.log(error) })
  }, []);
  return (
    <div>
      <table border={3}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address City</th>
          <th>Address Street</th>
          <th>Address Geo Lat</th>
        </tr>
        {users.map((user) => {
          return (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.address.street}</td>
              <td>{user.address.geo.lat}</td>
            </tr>
          );
        })}
      </table>
    </div>
  )
}
