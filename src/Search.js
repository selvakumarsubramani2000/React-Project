import React from 'react'

export const Search = ({search,setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search</label>
        <input
        type='text'
        placeholder='Search Item'
        id='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    </form>
)
}
