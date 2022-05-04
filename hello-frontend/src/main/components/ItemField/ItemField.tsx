// import {handleItemChanges} from "../EditItem/EditItemFunctions";
import React from "react";
import {ItemFieldProps} from "./ItemFieldProps";
import {capitalizeFirstLetter, handleItemChanges} from "./ItemFieldFunctions";

export function ItemField(props:ItemFieldProps) {
  return (
    <div>
      <label htmlFor={`item-input-${props.index}`}>{capitalizeFirstLetter(props.field)} {props.index}</label>
      <input
        id={`item-input-${props.index}`}
        type="text"
        minLength={1}
        maxLength={12}
        value={props.value}
        onChange={(e) => {
          handleItemChanges(
            {...props.item, [props.field]:e.target.value},
            props.editedList,
            props.editedList.items,
            props.setEditedList,
            props.index)
        }}
      />
    </div>
  )
}