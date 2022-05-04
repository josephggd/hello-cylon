import React from "react";
import {EditItemProps} from "./EditItemProps";
import {ToDoItem} from "../../../dtos/ToDoItem";
// import {ToDoList} from "../../../dtos/ToDoList";
// import {handleItemChanges} from "./EditItemFunctions";
import {ItemField} from "../ItemField/ItemField";

export function EditItem(props: EditItemProps) {
  let initialItem:ToDoItem = {
    id:null,
    title:"",
    description:""
  };
  if (props.item) {
    initialItem = props.item;
  }

  return(
    <div key={props.index}>
      <ItemField
        item={initialItem}
        field={"title"}
        value={initialItem.title}
        editedList={props.editedList}
        setEditedList={props.setEditedList}
        index={props.index}
      />
      <br/>
      <ItemField
        item={initialItem}
        field={"description"}
        value={initialItem.description}
        editedList={props.editedList}
        setEditedList={props.setEditedList}
        index={props.index}
      />
    </div>
  )
}