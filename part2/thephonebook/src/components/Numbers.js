import React from 'react'

const Numbers = ({ persons, filter, handleDelete }) => {

    return (
        <div>
            {
                persons.map((item) => {
                    const name = item.name.toLowerCase()
                    if (name.includes(filter.toLowerCase())) {
                        return <p key={item.name}>{item.name}: {item.number} <button id={item.id} name={item.name} onClick={handleDelete}>delete</button></p>
                    } else {
                        return null
                    }
                })
            }
        </div>
    )
}

export default Numbers