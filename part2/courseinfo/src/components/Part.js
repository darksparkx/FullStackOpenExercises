import React from 'react'

const Part = (part) => {
    const name = part.part.name
    const exercises = part.part.exercises

    return (
        <p>
            {name}:  {exercises}
        </p>
    )
}

export default Part