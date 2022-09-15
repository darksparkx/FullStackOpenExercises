import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((item) => {
                return (
                    <Part part={item} key={item.id} />
                )
            })}
        </div>
    )
}

export default Content