import { useState, useEffect } from 'react'
import Form from './components/Form'
import Numbers from './components/Numbers'
import Search from './components/Search'
import { getAll, create, remove, update } from './Services'

const successStyle = {
  color: 'green',
  fontStyle: 'italic',
  background: "lightgrey",
  fontSize: "20px",
  borderStyle: "solid",
  borderRadius: "5px",
  padding: "10px",
  marginBottom: "10px"
}
const errorStyle = {
  color: "red",
  fontStyle: 'italic',
  background: "lightgrey",
  fontSize: "20px",
  borderStyle: "solid",
  borderRadius: "5px",
  padding: "10px",
  marginBottom: "10px"
}

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    getAll().then(response => {
      setPersons(response)
    })
  }, [persons])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState('success')

  const Notification = () => {
    if (message === null) {
      return null
    } else {
      return (
        <div style={messageType === 'success' ? successStyle : errorStyle}>
          {message}
        </div>
      )
    }
  }
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    var copy = false;
    var replace = false;

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        copy = true

        if (persons[i].number !== newNumber) {
          window.confirm(`Do you want to change ${ persons[i].name }'s old number with a new one?`);
          replace = true;
          update(
            persons[i].id, {
            name: newName,
            number: newNumber
          })
            .then((res) => {
              setMessageType('success')
              setMessage(
                `${ persons[i].name }'s number has been changed `
              )
              setTimeout(() => {
                setMessage(null)
              }, 3000)

            })

        }
      }
    }

    if (!copy) {
      setPersons((persons) => [
        ...persons,
        {
          name: newName,
          number: newNumber
        }
      ])

      create({
        name: newName,
        number: newNumber
      })
        .then(response => {
          setMessageType('success')
          setMessage(
            `${ newName } has been added `
          )
          setTimeout(() => {
            setMessage(null)
          }, 3000)
        })

    } else if (!replace) {
      setMessageType('error')
      setMessage(
        `${ newName }'s entry already exists `
      )
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    }

  }


  const handleDelete = (e) => {
    window.confirm(`do you want to remove ${ e.target.name } from your phonebook`)
    remove(e.target.id)
      .then(res => {
        setMessageType('success')
        setMessage(
          `${ newName } has been removed `
        )
        setTimeout(() => {
          setMessage(null)
        }, 3000)
      })
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <Notification />

      <Search
        filter={filter}
        handleFilterChange={handleFilterChange}
      />

      <h2>Add new Person</h2>

      <Form
        newName={newName}
        newNumber={newNumber}
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Numbers
        persons={persons}
        filter={filter}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App