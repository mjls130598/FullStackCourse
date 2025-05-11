import { useState } from 'react'
import phoneService from '../services/phones'

const PersonForm = ({persons, setPersons, setNotificationMessage, setErrorMessage}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPhone = (event) =>{
        event.preventDefault()
        const oldPerson = persons.find((person) => person.name === newName)

        const newPerson = {
            name: newName, 
            number: newNumber,
            id: oldPerson ? oldPerson.id : (persons.length + 1).toString(),
        }

        if(!oldPerson){
            phoneService
                .create(newPerson)
                .then(response => {
                    setPersons(persons.concat(response.data))
                    setNewName('')
                    setNewNumber('')
                    setNotificationMessage(
                        `Added ${newPerson.name}`
                        )
                    setTimeout(() => {
                        setNotificationMessage(null)
                    }, 5000)   
                })
        }
        /*else{
            if(confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
                phoneService
                    .update(oldPerson.id, newPerson)
                    .then(response => {
                        setPersons(persons.map(person => 
                            person.id !== oldPerson.id ? person : response.data))
                        setNotificationMessage(
                            `${oldPerson.name} was already modified`
                            )
                        setTimeout(() => {
                            setNotificationMessage(null)
                        }, 5000)                        
                    })
                    .catch(() =>{
                        setErrorMessage(
                            `${oldPerson.name} can't be modified`
                            )
                        setTimeout(() => {
                            setErrorMessage(null)
                        }, 5000) 
                    })
            }
        }*/
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    return (
        <form onSubmit={addPhone}>
            <div>
                name: <input value={newName} onChange={handleNameChange}/>
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm