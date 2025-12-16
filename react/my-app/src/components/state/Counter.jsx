import React, { useState } from 'react'

export default function Counter() {
    // const[count,setCount]=useState([70,95,"Meenaranjini"]);
    //--------destruring-count-variable,setCount function---
    const [count, setCount] = useState(0);
    const handlerIncrement=() => {
                setCount(
                    (preState) => {
                        return preState + 1;
                    }
                );
            }
    const handlerDecrement=() => {
                setCount(
                    (preState) => {
                        return preState - 1;
                    }
                );
            }
    return (
        <div>
            {/* <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(0)}>Reset</button> */}

            <h1>{count}</h1>
            <button onClick={handlerIncrement}>+</button>
            <button onClick={handlerDecrement}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}