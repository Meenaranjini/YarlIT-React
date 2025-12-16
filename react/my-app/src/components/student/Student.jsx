
import './Student.css';
export default function Student(props) {
  return (
    <div>
      <h2>Student From</h2>
      <hr/>
      <div className='card-student'>
        <b>First Name:</b><i>{props.fname}</i><br />
        <b>Last Name:</b><i>{props.lname}</i><br />
        <b>Grade:</b><i>{props.grade}</i><br />
      </div>
      {props.children}
    </div>
  )
}

