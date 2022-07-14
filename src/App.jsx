
import './App.css'
import { Card } from './components/Card/Card'
import { Navbar } from './components/Navbar/Navbar'

import { pokemons } from './constants/pokemon'

function App() {

  return (
    <>
      <Navbar />
      <div className="App">
        <div className="card-group">
          {pokemons.map((pokemon, index) => {
            return <Card pokemon={pokemon} key={index}/>
          })}
        </div>
        
      </div>
    </>
  )
}

export default App
