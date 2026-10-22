import { useState, useEffect } from 'react'
import personService from './services/persons'
import PersonForm  from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        console.log('Promised fulfilled')
        setPersons(response)
      })
      .catch(error => {
        console.log('fail')
      })
  }, [])

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
    personService
      .create(newPhonebook)
      .then(response => {
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        console.log('fail')
      })
  }

  const handleDelete = (id, name) => {
    console.log(`Person with ${id} was deleted`)
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          console.log('fail')
        })
    }
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
      <Persons persons={searchPersonsResult} handleDelete={handleDelete} />
    </div>
  )
}

export default App