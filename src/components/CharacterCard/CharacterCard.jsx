import React, {useContext} from 'react'
import './CharacterCard.css'
import { Link } from 'react-router-dom'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { FavoritesContext } from '../../contexts/FavoritesContext'

function CharacterCard({character}) {
  //change to global state
  //NOTE {} not []

  const {favorites, addCharacter, removeCharacter} = useContext(FavoritesContext)

  //create variable for hearts
  //const isFavorite = false;
  const [isFavorite, setFavorites] = React.useState (false)

  React.useEffect(
    ()=>{
      //console.log('update')
      //is this char in favorites?
      setFavorites(favorites.find(item=> item.id === character.id))

    },[favorites]
  )


  return (
    <div className="character-card">
        <img src={character?.image}/>
        <p>{character?.name}</p>
        <Link to={`/details/${character?.id}`}>See Details</Link>
        {
          isFavorite?
          <FaHeart className='heart-icon'
           onClick={() => removeCharacter(character.id)}/>
            :
           <FaRegHeart className='heart-icon' 
          onClick={() =>addCharacter(character)}/>
        }
    </div>
  )
}

export default CharacterCard