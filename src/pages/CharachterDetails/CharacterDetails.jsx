import React, { useEffect } from 'react'
import './CharacterDetails.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function CharacterDetails() {
    //show data for a specific character
    //the id is in the url
    //use hook to retrieve the value with same id and capital
    const {characterId}  = useParams()

    //create state to hold character data
    const [character, setCharacter] = React.useState('')


    //https://rickandmortyapi.com/api/character/2

    //need to get data when page loads
    useEffect(
        ()=>{

            console.log('detail')
            //make api call
            axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(res =>{
                console.log(res.data)
                //i have the data, need to do something with this data
                setCharacter(res.data)


            })
            .catch(err=>console.log(err))


        },[] //this means run once when page load
    )

  return (
    <div className='details-container'>
        <img src={character.image}/>
        <div className='container-info'>
            <p>Name: {character?.name}</p>
            <p>Gender: {character?.gender}</p>
            <p>Location: {character?.location?.name}</p>
            <p>Species: {character?.species}</p>
        </div>

    </div>
  )
}

export default CharacterDetails