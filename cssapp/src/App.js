import Student from './components/student/Student.js';
import Subject from './components/student/subject/Subject.js';
import './App.css';

export default function App() {
  return (
    <div>
      <h1>Student Details</h1>
        <div className="container">
      <div className="card" >
        <Student fname="Seelan" lname="Yoga" grade="12" >
          <Subject subject1="Maths" subject2="English"></Subject>
        </Student>
      </div>
      <div className="card">
        <Student fname="Meenu" lname="Lingam" grade="5" >
          <Subject subject1="Maths" subject2="Tamil"></Subject>
        </Student>
      </div>
      <div className="card">
        <Student fname="nwe" lname="mskkf" grade="10"  >
          <Subject subject1="Science" subject2="Tamil"></Subject>
        </Student>
      </div>
      <div className="card">
        <Student fname="abi" lname="mala" grade="11"  >
          <Subject subject1="Commerece" subject2="Tamil"></Subject>
        </Student>
      </div>
      <div className="card">
        <Student fname="dwdd" lname="dwkwd" grade="8" >
          <Subject subject1="ICT" subject2="Tamil"></Subject>
        </Student>
      </div>
       <div className="card">
        <Student fname="dwdd" lname="dwkwd" grade="8" >
          <Subject subject1="ICT" subject2="Tamil"></Subject>
        </Student>
      </div>
    </div>
    </div>
  )
}

