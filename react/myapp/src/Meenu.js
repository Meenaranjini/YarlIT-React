
//object as Parameter
// function Meenu({name}) {
//   return (

//             <h2> My Name is {name} </h2>
//   );
// }
// export default Meenu ;

//arrow function
// let Meenu=({name})=> {
//   return (
//             <h2> My Name is {name} </h2>
//   );
// }
// export default Meenu ;

// anomynaus function---
// let Meenu=function({name}) {
//   return (
//             <h2> My Name is {name} </h2>
//   );
// }
// export default Meenu ;


function Meenu(props) {
  return (
    <>
        <b>First Name</b><i>{props.fname}</i>
        <b>Last Name</b><i>{props.lname}</i>
    </>
       
  );
}
export default Meenu;