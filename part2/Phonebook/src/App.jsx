import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-8952365' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const addPhonebook = (event) => {
    event.preventDefault()
    if (persons.some((gfg) => gfg.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
      return
    }
    const newPhonebook = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newPhonebook))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPhonebook}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name + Math.random()}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App