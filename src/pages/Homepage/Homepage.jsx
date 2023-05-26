import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import Search from '../../components/Search/Search'

function Homepage() {
    //create state for characters
    const [characters, setCharacters] = useState([])

    

    //make api call when the page load
    //use useEffect
    useEffect(
        ()=>{
            console.log('homepage loaded')
            //call api
            axios.get(`https://rickandmortyapi.com/api/character`)
            .then(res =>{
                console.log(res.data.results)
                //store data
                setCharacters(res.data.results)


            }
            )
            .catch(err=>console.log(err))

        },[] //empty array means run one time when page load

    )

  return (
    <div className='home-container'>
        <Search setCharacters={setCharacters} />
        <h1>Main Character</h1>
        <div className='characters-container'>
            {

                characters.map(item=><CharacterCard 
                                key={item.id}
                                character={item} />)
                //characters.map(item=><p key={item.id}>{item.name}</p>)
            }


        </div>
    </div>
  )
}

export default Homepage