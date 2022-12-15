// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

function Name() {
  const [name, setName] = React.useState('')
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={event => setName(event.target.value)} />
    </div>
  )
}

// 🐨 accept `animal` and `onAnimalChange` props to this component
function FavoriteAnimal({favAnimal, onAnimalChange}) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={favAnimal}
        onChange={onAnimalChange}
      />
    </div>
  )
}

// 🐨 uncomment this
function Display({favAnimal}) {
  return <div>{`Your favorite animal is: ${favAnimal}!`}</div>
}

function App() {
  // 🐨 add a useState for the animal
  
  const [favAnimal, setFavAnimal] = React.useState('')
  return (
    <form>
      <Name />
      <FavoriteAnimal favAnimal={favAnimal} onAnimalChange={event => setFavAnimal(event.target.value)} />
      <Display favAnimal={favAnimal}/>
    </form>
  )
}

export default App
