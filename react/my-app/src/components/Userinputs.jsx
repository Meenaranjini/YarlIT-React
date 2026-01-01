import React, { useEffect,useState } from 'react';

export default function Userinputs() {
    // 1. Declare state for the input value
    const [inputValue, setInputValue] = useState('');

    // 2. Define the change handler function
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
      useEffect(()=>{
            console.log("This is use Effect");
        },[inputValue]);
    return (
        <div>
            Name:<input type="text" value={inputValue} onChange={handleChange}/>
            <p>input value: {inputValue}</p>
        </div>
    );
}