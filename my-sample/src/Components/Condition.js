import React from 'react'

export default function Condition() {
    let monBooleen = true;

  return (
    <div>
        <h1>Condition</h1>
            {monBooleen ? "C'est vrai" : "C'est faux"}
    </div>
    );
}
 