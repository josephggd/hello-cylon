import React from "react";
import {EditItemProps} from "./EditItemProps";
import {ItemField} from "../ItemField/ItemField";
import {handleItemChanges} from "../ItemField/ItemFieldFunctions";

export function EditItem(props: EditItemProps) {
  return(
    <div key={props.index} style={{"padding":"4px"}}>
      <ItemField
        item={props.item}
        max={12}
        field={"title"}
        value={props.item.title}
        editedList={props.editedList}
        setEditedList={props.setEditedList}
        index={props.index}
        handleItemChange={handleItemChanges}
      />
      <ItemField
        item={props.item}
        max={24}
        field={"description"}
        value={props.item.description}
        editedList={props.editedList}
        setEditedList={props.setEditedList}
        index={props.index}
        handleItemChange={handleItemChanges}
      />
    </div>
  )
}