import React from 'react'
import './Search.css'
import axios from 'axios'

function Search({setCharacters}) {
    //create state to get input from the textbox
    const[query, setQuery] = React.useState('')

    //https://rickandmortyapi.com/api/character/?name=beth

    const handleSubmit = (e) =>{
        //stop from refreshing page
        e.preventDefault();
        console.log('search for ', query)
        //make api call to get matching characters
        axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
        .then(res =>{
            console.log(res.data.results)


            //change the value on homepage
            setCharacters(res.data.results)

        })
        .catch(err=>{
            //check for not found
            if (err.response.status === 404){
                alert(`No character name ${query}`)
            }
            else{
                console.log(err)
            }
            })


        //clear textbox
        setQuery('')



    }

  return (
    <form className='search-container' onSubmit={handleSubmit}>
        <input onChange={(e)=> setQuery(e.target.value)}
        value={query}
        type='text' placeholder='Search all characters' />

    </form>
  )
}

export default Search