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
  const [item, setItem] = React.useState<ToDoItem>({id:initialId,
    title:initialTitle,
    description:initialDescription});

  function handleItemChanges() {
    const allItems = props.items;
    allItems[props.index] = item;
    const nonNullItems:ToDoItem[] = [];
    allItems.forEach(possiblyNullItem => {
      if (possiblyNullItem !== null && possiblyNullItem.title !== "") {
        nonNullItems.push(possiblyNullItem);
      }
    });
    props.setItems(allItems);
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
        value={item.title}
        onChange={(e) => {
          setItem({...item, title: e.target.value})
          handleItemChanges()
        }}
      /><br/>
      <label htmlFor={`item-input-${props.index}`}>Description {props.index}</label>
      <input
        id={`item-input-${props.index}`}
        type="text"
        minLength={1}
        maxLength={12}
        value={item.description}
        onChange={(e) => {
          setItem({...item, description: e.target.value})
          handleItemChanges()
        }}
      />
    </div>
  )
}