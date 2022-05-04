import React from "react";
import {EditListProps} from "./EditListProps";
import {postNewToDoList, putUpdateToDoList} from "../../api/ApiRequests";
import {ToDoList} from "../../../dtos/ToDoList";
// import {ToDoItem} from "../../../dtos/ToDoItem";
import {EditItem} from "../EditItem/EditItem";
import {handleSubmit} from "./EditListFunctions";

export function EditList(props:EditListProps){
  let initialList:ToDoList = {
    id:null,
    title:"",
    description:"",
    items:[]};
  if (props.editedList) {
    initialList = props.editedList;
  }
  const submitList = initialList.id!=null ? putUpdateToDoList : postNewToDoList;
  return (
    <div className="ContainerCol">
      <h1>Edit {props.editedList.title}</h1>
      <button onClick={() => {
        props.setShowInput(true);
        props.setEditedList({id:null, title:"", description:"", items:[]});
      }
      }>New list</button><br/>
      {props.showInput &&
          <div>
              <label htmlFor="title-input">Title</label>
              <input
                  id="title-input"
                  type="text"
                  minLength={4}
                  maxLength={8}
                  value={initialList.title}
                  onChange={(e) => props.setEditedList({...initialList, title: e.target.value})}
              /><br/>
              <label htmlFor="title-input">Description</label>
              <input
                  id="description-input"
                  type="text"
                  minLength={4}
                  maxLength={12}
                  value={initialList.description}
                  onChange={(e) => props.setEditedList({...initialList, description: e.target.value})}
              /><br/>
            {props.editedList.items.map((item, index) => (
              <EditItem
                index={index}
                key={index}
                editedList={initialList}
                setEditedList={props.setEditedList}
                item={item}
                items={props.editedList.items}
              />
            ))}
              <br/>
              <div style={{"justifyContent":"space-between"}}>
                  <button onClick={() => {
                    const items = props.editedList.items.concat({id:null, title:"", description:""});
                    props.setEditedList({...props.editedList, items:items});
                  }}>Add Item</button>
                  <button onClick={() => handleSubmit(
                    initialList,
                    props.editedList.items,
                    submitList,
                    props.setEditedList,
                    props.setRefresh
                  )}>Save List</button>
              </div>
          </div>}
    </div>
  )
}