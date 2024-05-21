import React, { useState } from 'react'

export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
    onSearch(event.target.value)
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar por Nombre Comercial"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  )
}
