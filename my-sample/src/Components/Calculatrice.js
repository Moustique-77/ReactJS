import React from 'react'
import { useState } from 'react'

export default function Calculatrice() {
    const [input1, setInput1] = useState();
    const [input2, setInput2] = useState();

    const addition = () => {
        alert(parseInt(input1) + parseInt(input2));
    };

    const soustraction = () => {
        alert(parseInt(input1) - parseInt(input2));
    };

    const multiplication = () => {
        alert(parseInt(input1) * parseInt(input2));
    };

    const division = () => {
        alert(parseInt(input1) / parseInt(input2));
    };

  return (
    <div>
        <input type="number" onChange={(e) => setInput1(e.target.value)} />
        <input type="number" onChange={(e) => setInput2(e.target.value)} />
        <br />

        <button onClick={addition}>+</button>
        <button onClick={soustraction}>-</button>
        <button onClick={multiplication}>*</button>
        <button onClick={division}>/</button>
    </div>
  );
}
