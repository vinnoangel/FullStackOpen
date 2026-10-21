import { useState } from 'react'
import PersonForm  from './components/PersonForm '
import Persons from './components/Persons'
import Filter from './components/Filter'

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
      <Filter value={searchTerm} onChange={handleSearch} />
      <h3>add a new</h3>
      <PersonForm  
        addPhonebook={addPhonebook} 
        name={newName} 
        handleNameChange={handleNameChange} 
        number={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={searchPersonsResult} />
    </div>
  )
}

export default App