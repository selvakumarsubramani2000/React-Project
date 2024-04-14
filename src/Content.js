import React from "react";
import ListItems from "./ListItems";

const Content = ({items, changeHandler, deleteHandler}) => {
  return (
    <>
      {(items.length) ? (
      <ListItems 
        items={items}
        changeHandler={changeHandler} 
        deleteHandler={deleteHandler}
      />
      ): (
        <p>Your List is empty</p>
      )
      
      }
    </>
    
  );
}

export default Content;
