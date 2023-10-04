import React, {useContext} from 'react'
import './Favorites.css'
import { FavoritesContext } from '../../contexts/FavoritesContext'
import { ThemeContext } from '../../contexts/ThemeContext'
import CharacterCard from '../../components/CharacterCard/CharacterCard'

function Favorites() {
    //change to global state
  //NOTE {} not []

  const {favorites} = useContext(FavoritesContext)

  //darkmode function
  const {darkMode, setDarkMode} = useContext(ThemeContext)


  return (
    <div className={darkMode?"favorites-container favorites-dark" : "favorites-container"}>
        <h1>My Favorite Characters</h1>    
        <div className='favorite-characters'>
            {
                favorites.length > 0?
                favorites.map(item=><CharacterCard 
                    key={item.id}
                    character={item} />)

                :
                <p>No favorites selected yet</p>
            }
        </div>
    </div>
  )
}

export default Favorites