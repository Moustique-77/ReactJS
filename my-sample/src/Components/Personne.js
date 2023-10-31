import React from 'react'

export default function Personne({data}) {
  return (
    <div>
        <ul>
            {data.map((item, index) => (
                <li key={index}>{item.actor} joue {item.character}</li>
            ))}
        </ul>
    </div>
  )
}
