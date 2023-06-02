import { useState, createContext, useEffect } from "react";
//create the context
export const FavoritesContext = createContext()

export default function FavoritesContextProvider(props){
    //create state to hold favorite char
    const [favorites, setFavorites ] = useState([])
    

    useEffect(
        ()=>{
            console.log('context load')
            //check localstorage to initialize state
            const storedFavorites = localStorage.getItem('favoritesList')
            console.log('value is ', storedFavorites)
            if(storedFavorites){
                //only set if there is something in localStorage
                setFavorites(JSON.parse(storedFavorites))
            }


        },[] //run once when page loads
    )

    useEffect(
        ()=>{
            console.log('favorite is ', favorites)
            //save new favorites when any changes to local
            localStorage.setItem('favoritesList', JSON.stringify(favorites))

        },[favorites] //run when darkmode changes
    )


    //function to add charcter to favorites
    const addCharacter = (charToAdd) =>{
        console.log('adding', charToAdd)
        //add character to state
        let newFavorites =[...favorites, charToAdd]
        console.log(newFavorites)
        //store in state
        setFavorites(newFavorites)

    }

    //function to remove char
    const removeCharacter = (charId)=>{
        console.log('removeId', charId)
        //remove char from state
        let newFavorites = favorites.filter(item=> item.id !== charId)
        //set to store
        setFavorites(newFavorites)

    }

    return(
        <FavoritesContext.Provider value={{favorites, addCharacter, removeCharacter}} >
            {props.children}
        </FavoritesContext.Provider>
    )
}