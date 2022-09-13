import React from 'react'

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises: 
                {
                    props.props.parts[0].exercises +
                    props.props.parts[1].exercises +
                    props.props.parts[2].exercises
                }
            </p>
        </div>
    )
}

export default Total