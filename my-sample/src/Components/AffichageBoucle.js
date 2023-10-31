import React from 'react'

export default function AffichageBoucle() {
    let tableau = ["banane", "pomme", "poire", "orange"];
  return (
    <div>AffichageBoucle

        {tableau.map((fruit, index) => <p>je propose : {fruit} à la position {index}</p>)}

    </div>
  )
}
