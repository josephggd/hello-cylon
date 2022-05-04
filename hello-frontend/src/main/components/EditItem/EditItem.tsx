import React from "react";
import {EditItemProps} from "./EditItemProps";
import {ToDoItem} from "../../../dtos/ToDoItem";

export function EditItem(props: EditItemProps) {

  let initialId = null;
  let initialTitle = "";
  let initialDescription = "";
  if (props.item) {
    initialId = props.item.id;
    initialTitle = props.item.title;
    initialDescription = props.item.description;
  }
  const initialItem = {
    id: initialId,
    title: initialTitle,
    description: initialDescription
  };
  function handleItemChanges(toDoItem: ToDoItem) {
    const allItems = props.items;
    allItems[props.index] = toDoItem;
    const nonNullItems:ToDoItem[] = [];
    allItems.forEach(possiblyNullItem => {
      if (possiblyNullItem !== null && possiblyNullItem.title !== "") {
        nonNullItems.push(possiblyNullItem);
      }
    });
    props.setEditedList({...props.editedList, items:nonNullItems});
  }

  return(
    <div key={props.index}>
      <label htmlFor={`item-input-${props.index}`}>Title {props.index}</label>
      <input
        id={`item-input-${props.index}`}
        type="text"
        minLength={1}
        maxLength={8}
        value={initialItem.title}
        onChange={(e) => {
          handleItemChanges({...initialItem, title:e.target.value})
        }}
      /><br/>
      <label htmlFor={`item-input-${props.index}`}>Description {props.index}</label>
      <input
        id={`item-input-${props.index}`}
        type="text"
        minLength={1}
        maxLength={12}
        value={initialItem.description}
        onChange={(e) => {
          handleItemChanges({...initialItem, description:e.target.value})
        }}
      />
    </div>
  )
}