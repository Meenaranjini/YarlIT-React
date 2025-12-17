import React,{useEffect, useState} from 'react'

export default function Githubusers() {
    const[users,setUsers]=useState([]);
    const[totalusers,settotalUsers]=useState(0);
   

    useEffect(()=>{
        async function fetchgithubusers() {
            try{
                const response= await fetch("https://jsonplaceholder.typicode.com/users");
                const data=await response.json();
                console.log(data);
                setUsers(data);
                settotalUsers(data.length);
            }catch(error){
                console.log(error);
            }
       }
      fetchgithubusers(); 
    },[]);
  return (
    <div>
       {users.map((user)=>{
        return (<p key={user.id}>{user.name}</p>);
       })}
    </div>
  )
}
