import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)

  const addPhonebook = (event) => {
    event.preventDefault()
    if (persons.some((gfg) => gfg.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
      return
    }
    const newPhonebook = {
      name: newName
    }
    setPersons(persons.concat(newPhonebook))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPhonebook}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name + Math.random()}>{person.name}</div>)}
    </div>
  )
}

export default App