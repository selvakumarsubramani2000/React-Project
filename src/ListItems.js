import React from 'react'
import ItemsInList from './ItemsInList';

const ItemList = ({items, changeHandler, deleteHandler}) => {
  return (
    <ul>
    {
      items.map((item) => (
        <ItemsInList
          item={item} 
          key={item.id}
          changeHandler={changeHandler} 
          deleteHandler={deleteHandler}
        />
      ))
    }
  </ul>
  )
}

export default ItemList