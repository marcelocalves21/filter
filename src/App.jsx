
import './App.css'
import { Card } from './components/card'

import { pokemons } from './constants/pokemon'

function App() {

  return (
    <div className="App">
      {pokemons.map((pokemon, index) => {
        return <Card pokemon={pokemon} />
      })}
      
    </div>
  )
}

export default App
