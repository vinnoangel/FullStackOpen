import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    { name: 'Vincent Ohiri', number: '358-466844206', id: 5 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleSearch = (event) => setSearchTerm(event.target.value)

  const searchPersonsResult 
    = persons.filter(
      person => person.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()
  ))

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
      <div>filter shown with<input value={searchTerm} onChange={handleSearch} /></div>
      <form onSubmit={addPhonebook}>
        <h2>add a new</h2>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {searchPersonsResult.map(person => <div key={person.name + Math.random()}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App