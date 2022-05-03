import React from "react";
import {EditListsProps} from "./EditListsProps";
import {postNewToDoList, putUpdateToDoList} from "../../api/ApiRequests";
import {ToDoList} from "../../../dtos/ToDoList";
import {ToDoItem} from "../../../dtos/ToDoItem";
import {EditItem} from "../EditItem/EditItem";

export function EditLists(props:EditListsProps){
  let initialId = null;
  let initialTitle = "";
  let initialDescription = "";
  let initialItems:ToDoItem[] = [];
  if (props.list) {
    initialId = props.list.id;
    initialTitle = props.list.title;
    initialDescription = props.list.description;
    initialItems = props.list.items;
    if (initialItems.length === 0) {
      initialItems.push({id:null, title:"", description:""});
    }
  }
  const [editedItems, setEditedItems] = React.useState<(ToDoItem|null)[]>(initialItems);
  const [editedList, setEditedList] = React.useState<ToDoList>({
    id: initialId,
    title: initialTitle,
    description: initialDescription,
    items: initialItems
  });

  const submitList = initialId!=null ? putUpdateToDoList : postNewToDoList;
  return (
    <div>
      <h1>Edit Lists</h1>
      <label htmlFor="title-input">Title</label>
      <input
        id="title-input"
        type="text"
        minLength={4}
        maxLength={8}
        value={editedList.title}
        onChange={(e) => setEditedList({...editedList, title: e.target.value})}
      /><br/>
      <label htmlFor="title-input">Description</label>
      <input
        id="description-input"
        type="text"
        minLength={4}
        maxLength={12}
        value={editedList.description}
        onChange={(e) => setEditedList({...editedList, description: e.target.value})}
      /><br/>
      {editedItems.map((item, index) => (
        <EditItem
          index={index}
          editedList={editedList}
          setEditedList={setEditedList}
          item={item}
          items={editedItems}
          setItems={setEditedItems}
        />
      ))}
      <br/>
      <button onClick={() => setEditedItems(editedItems.concat([null]))}>Add Item</button>
      <button onClick={() => submitList(editedList)}>Save</button>
    </div>
  )
}