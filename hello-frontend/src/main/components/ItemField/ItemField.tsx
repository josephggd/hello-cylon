// import {handleItemChanges} from "../EditItem/EditItemFunctions";
import React, {ChangeEvent} from "react";
import {ItemFieldProps} from "./ItemFieldProps";
import {capitalizeFirstLetter} from "./ItemFieldFunctions";
import TextField from "@mui/material/TextField";

export function ItemField(props:ItemFieldProps) {
  return (
    <TextField
      id={`item-input-${props.index}`}
      inputProps={{ maxLength: props.max, minLength: 1 }}
      label={"Item "+capitalizeFirstLetter(props.field)}
      type="text"
      required={true}
      value={props.value}
      data-testid={"input-"+props.field+"-"+props.index}
      onChange={(e:ChangeEvent<HTMLInputElement>) => {
        props.handleItemChange(
          {...props.item, [props.field]:e.target.value},
          props.editedList,
          props.editedList.items,
          props.setEditedList,
          props.index)
      }}
    />
  )
}