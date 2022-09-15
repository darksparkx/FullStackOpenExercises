import React from 'react'

const Total = ({ parts }) => {

    const total = parts.reduce((prev, current) => {
        return prev + current.exercises
    }, 0)

    return (
        <p>Number of exercises: {total}</p>
    )
}

export default Total