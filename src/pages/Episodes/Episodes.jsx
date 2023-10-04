import React, {useContext} from 'react'
import './Episodes.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import { ThemeContext } from '../../contexts/ThemeContext'



//api to use
//https://rickandmortyapi.com/api/episode

function Episodes() {
  //change to global state
  //NOTE {} not []

  const {darkMode, setDarkMode} = useContext(ThemeContext)


  //create state for numbers
  const[options, setOptions] = React.useState ([])
  //create state to hold option selected
  const [selectedOption, setSelectedOption] = React.useState ([1])

  const [selectedEpisode, setSelectedEpisode] = React.useState()

  const [characterList, setCharacterList] = React.useState([])


  //page loads to how many episodes
  React.useEffect(
    ()=>{
      axios.get(`https://rickandmortyapi.com/api/episode`)
      .then(res=>{
        console.log(res.data.info.count)
        //create array with numbers ftom 1 to value
        const newOption = []
        for (let i = 1; i <= res.data.info.count; i++){
          newOption.push(i) 
        }
        console.log(newOption)
        //store in state
        setOptions(newOption)
      })
      .catch(err=>console.log(err))


    },[] //empty means run one time when page load

  )

  const handleSelectChange = (e) =>{

  console.log('change', e.target.value)
  //store in state
  setSelectedOption(e.target.value)
}

  const fetchEpisodeData = async () =>{
    try{
      //https://rickandmortyapi.com/api/episode/28
      const res = await axios.get(
      `https://rickandmortyapi.com/api/episode/${selectedOption}`)
    
      console.log(res.data)
      //store data in state
      setSelectedEpisode(res.data)

      //res.data.characters has all endpoints
      //need to make api calls and gather the results
      const episodeCharacters = await Promise.all(
        res.data.characters.map(url=>{
          return axios.get(url).then(res => res.data)
        })
      )
      console.log(episodeCharacters)
      //store in state
      setCharacterList(episodeCharacters)


    }
    catch(err){
      console.log(err)
    }
  }

  React.useEffect(
  ()=>{
    console.log('get episode', selectedOption)
    //call function to get data
    fetchEpisodeData()

  }, [selectedOption] //runs when select option change


  )
  return (
    <div className={darkMode?"episodes-container episodes-dark" : "episodes-container"}>
      <div>
        <label>Select an epidode:</label>
        <select id='select-episode' onChange={handleSelectChange}>
           {
            um=options.map(n><option key={num} value={num}>{`Episode ${num}`}</option>)
           }
        </select>
      </div>
      <div>
        <div className='episode-info'>
          <p>Episode Name: {selectedEpisode?.name}</p>
          <p>Air Date: {selectedEpisode?.air_date}</p>
        </div>
        <div className='character-container'>
           {
                characterList.map(item=><CharacterCard 
                  key={item.id}
                  character={item} />)
           }
        </div>
      </div>
    </div>
  )
}

export default Episodes