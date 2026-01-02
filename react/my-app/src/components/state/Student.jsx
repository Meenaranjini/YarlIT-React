import React, { useState } from "react";
import { data } from "../../data/Dataset.js";
import '../student/Student.css';
import Student from "../student/Student.jsx";

export default function Students() {
  const [students, setStudents] = useState(data); //----array destructuring---
  const[totalStudent,setTotalStudent]=useState(data.length);
  const handlerdeleteall=()=>{
    setStudents([]);
    setTotalStudent(0);
  }
  const handlerresetall=()=>{
    setStudents(data);
    setTotalStudent(data.length);
  }

  const handlerdelete=(id)=>{
    const filterStudent=students.filter((student)=>{
      return (student.id!==id);
    });
    setStudents(filterStudent);
    setTotalStudent(filterStudent.length);
  }
  return (
    <div>
      <h1>Student list {totalStudent}</h1>
      <table border={3}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Grade</th>
          <th>Delete</th>
        </tr>
           {students.map((student) => {
            return(
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
                <td><button onClick={()=>{
                  handlerdelete(student.id)
                }}>Delete</button></td>
             </tr>
          );
          })}
      </table>
      <button onClick={handlerdeleteall}>Delete all</button>
      <button onClick={handlerresetall}>Reset</button>

      {/* {students.map((student)=>{
        return (
                <Student id={student.id} name={student.name} age={student.age} grade={student.grade} />
        )
      })} */}
    </div>
  );
}