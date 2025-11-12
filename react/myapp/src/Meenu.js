
//----object as Parameter
// function Meenu({name}) {
//   return (
//             <h2> My Name is {name} </h2>
//   );
// }
// export default Meenu ;

//----------arrow function
// let Meenu=({name})=> {
//   return (
//             <h2> My Name is {name} </h2>
//   );
// }
// export default Meenu ;

// --------anomynaus function---
let Myname=function({name}) {
  return (
            <h2> My Name is {name} </h2>
  );
}
export default Myname ;

function Meenu(props) {
  return (
    <>
      <b>First Name</b><i>{props.fname}</i>
      <b>Last Name</b><i>{props.lname}</i>
    </>
  );
}
export {Meenu};