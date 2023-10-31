import React from 'react'
import Personne from './Personne'

export default function Personnages() {
    const personnages = [
        {actor: "Harrison Ford", character: "Han Solo"}, 
        {actor: "Mark Hamill", character: "Luke Skywalker"}, 
        {actor: "Carrie Fisher", character: "Princesse Leia"}];
  return (
    <div>Personnages

        <Personne data={personnages} />

    </div>
  )
}
