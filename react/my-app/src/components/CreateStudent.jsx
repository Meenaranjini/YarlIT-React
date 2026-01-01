import React, {useState } from "react";


export default function CreateStudent() {
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const handlerChangevalue=(e)=>{
        console.log(e.target.value);
    }
    return (
        <div>
            <h1>Create Student</h1>
            <form action="">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname"  value={firstName} onChange={(e)=>{
                        // handlerChangevalue(e);
                       setFirstName(e.target.value); 
                }}/><br />
                <label htmlFor="lname" >Last Name</label>
                <input type="text" id="lname"  value={lastName} onChange={(e)=>{
                       setLastName(e.target.value); 
                }}/><br />
                <input type="submit"/>
            </form>
            <h1>{firstName} {lastName} </h1>
        </div>
    )
}
