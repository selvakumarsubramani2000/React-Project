import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItems = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor='AddItem'> Add Item</label>
        <input 
            autoFocus
            id="additem"
            required
            type='text'
            placeholder='Add item'
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button type='submit' aria-label = 'Add Item'> <FaPlus/> </button>
    </form>
  )
}

export default AddItems