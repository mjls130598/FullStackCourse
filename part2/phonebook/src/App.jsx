import { useState, useEffect } from 'react'
import phoneService from './services/phones'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import Error from './components/Error'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newFilter, setNewFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('nothing happened ...')
  const [errorMessage, setErrorMessage] = useState('nothing happend yet ...')

  useEffect(() => {
    phoneService.getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleRemove = (id, name) => {
    if(confirm(`Delete ${name}?`)){
        phoneService.delete(id)
            .then(response => {
                console.log(`Remove ${id}`)
                const newPersons = 
                  persons.filter(person => person.id !== id)
                setPersons(newPersons)
                setNotificationMessage(
                  `${name} was already removed from server`
                )
                setTimeout(() => {
                  setNotificationMessage(null)
                }, 5000)
            })
    }
  } 

  const phonesToShow = (newFilter === '') ? persons : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <Error message={errorMessage} />
      <Filter newFilter={newFilter} setNewFilter={setNewFilter}/>
      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons}
        setNotificationMessage={setNotificationMessage} setErrorMessage={setErrorMessage} />
      <h2>Numbers</h2>
      <Persons persons={phonesToShow} handleRemove={handleRemove}/>
    </div>
  )
}

export default App