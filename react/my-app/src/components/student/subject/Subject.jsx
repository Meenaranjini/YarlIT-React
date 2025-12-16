import './Subject.css';
export default function Subject(props) {
  return (
    <div className="card-subject">
      <h3>Subject List</h3>
      <ul>
        <li>{props.subject1}</li>
        <li>{props.subject2}</li>
      </ul>
    </div>
  )
}