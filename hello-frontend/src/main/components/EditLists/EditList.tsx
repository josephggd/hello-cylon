import React from "react";
import {EditListProps} from "./EditListProps";
import {blankList} from "../../../dtos/ToDoList";
// import {ToDoItem} from "../../../dtos/ToDoItem";
import {EditItem} from "../EditItem/EditItem";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {blankItem} from "../../../dtos/ToDoItem";

export function EditList(props:EditListProps){
  return (
    <div className="ContainerCol">
      <h3 data-testid="edit-list-header">Edit {props.editedList.title}</h3>
      <Button
        data-testid="new-list-button"
        onClick={() => {
          props.setShowInput(true);
          props.setEditedList(blankList);
      }
      }>New list
      </Button>
      <br/>
      {props.showInput &&
        <div>
          <TextField
            id="title-input"
            data-testid="title-input"
            inputProps={{ maxLength: 12, minLength: 1 }}
            helperText={"name your list"}
            type="text"
            label="List Title"
            required={true}
            value={props.editedList.title}
            onChange={(e) =>
              props.setEditedList({...props.editedList, title: e.target.value})}
          />&nbsp;
          <TextField
            id="description-input"
            data-testid="description-input"
            inputProps={{ maxLength: 12, minLength: 1 }}
            helperText={"provide a description"}
            multiline={true}
            type="text"
            label="List Description"
            required={true}
            value={props.editedList.description}
            onChange={(e) =>
              props.setEditedList({...props.editedList, description: e.target.value})}
          /><br/><br/>
          {props.editedList.items.map((item, index) => (
            <EditItem
              data-testid={`edit-item-${index}`}
              index={index}
              key={index}
              editedList={props.editedList}
              setEditedList={props.setEditedList}
              item={item}
              items={props.editedList.items}
            />
          ))}
          <br/>
          <Button
              data-testid="add-button"
              onClick={() => {
                if (props.editedList.items.every(item => item.title !== "")) {
                  const items = props.editedList.items.concat(blankItem);
                  props.setEditedList({...props.editedList, items:items});
                }
          }}>Add Item</Button>
          <Button
            data-testid="save-button"
            onClick={() => props.handleSubmit(
              props.editedList,
              props.editedList.items,
              props.setEditedList,
              props.setRefresh
          )}>Save List</Button>
        </div>}
    </div>
  )
}