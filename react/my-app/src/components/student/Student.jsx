
import './Student.css';
export default function Student(props) {
  return (
    <div>
      <div className="card" >
      <h3>{props.name}'s Detail </h3>
      <hr/>
      <div className="container">
          
            <div className='card-student'>
              <b>ID:</b><i>{props.id}</i><br />
              <b>Name:</b><i>{props.name}</i><br />
              <b>Age:</b><i>{props.age}</i><br />
              <b>Grade:</b><i>{props.grade}</i><br />
            </div>
          </div>
      </div>
    </div>
  )
}

