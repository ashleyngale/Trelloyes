import React from 'react';
import './Messages.css'

export default function item(props) {
  const item = +props.amount
   
  if (!item.length){
    return <p className="clicked_item"> no items selected </p> 
  }

  if (item.length > 1){
    return <span>{props.item}</span>
  }
}

export default Item;