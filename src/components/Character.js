// Write your Character component here

import React from "react";
//import styled from 'styled-components'

export default function Character(props){
    console.log(props)

    return(
        <div className='Character'>
            <h2>Star Wars Characters</h2>
            <p>Name: {props.data.name}</p>
            <p>Height: {props.data.height}</p>
            <p>Eye Color: {props.data.eye_color}</p>
            <p>Hair Color: {props.data.hair_color}</p>
            <p>Birth Year: {props.data.birth_year}</p>
            <p>Gender: {props.data.gender}</p>
            <p>Homeworld: {props.data.homeworld}</p>
            <p>Species: {props.data.species}</p>

        </div>
    )
}