import { DomHandler } from 'primereact/utils';
import React, { useEffect, useState } from 'react'

export default function Useeffect() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const handlerIncrement1= () => {
        setCounter1(counter1 + 1);
        console.log(counter1);
    }
    const handlerIncrement2 = () => {

        setCounter2(counter2 + 1);
        console.log(counter2);
    }
    useEffect(()=>{
        console.log("This is use Effect");
    },[]); // needed api call  rendering
    return (<div>

        <h1> counter1 {counter1}</h1>
        <button onClick={handlerIncrement1}>Increment Counter1 </button>
        <h1>counter2 {counter2}</h1>
        <button onClick={handlerIncrement2}>Increment counter2</button>
    </div>
    );


}
