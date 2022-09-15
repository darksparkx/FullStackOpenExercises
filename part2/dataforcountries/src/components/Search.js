import React from 'react'

const Search = ({filter, handleFilterChange}) => {
    return (
        <div>
            Find Countries:
            <input value={filter} onChange={handleFilterChange} />
        </div>
    )
}

export default Search