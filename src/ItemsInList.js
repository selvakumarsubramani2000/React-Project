import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const ItemsInList = ({item,changeHandler,deleteHandler}) => {
  return (
    <li className="item" key={item.id}>
          <input onChange={() => {changeHandler(item.id)}} checked={item.isChecked} type="checkbox"/>
          <label style={(item.isChecked) ? {textDecoration:'line-through'} : null} onDoubleClick={() => {changeHandler(item.id)}}>{item.doto}</label>
          <FaTrashAlt
           role="button"
           tabIndex="0" 
           aria-label={`Delete ${item.doto}`}
           onClick={()=> deleteHandler(item.id)
           }/>
      </li>
  )
}

export default ItemsInList