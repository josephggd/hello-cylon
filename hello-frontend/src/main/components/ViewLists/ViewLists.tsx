import React from "react";
import {ViewListsProps} from "./ViewListsProps";

export function ViewLists(props:ViewListsProps) {
  return (
    <div>
      <h1>View Lists</h1>
      <ul>
        {props.lists.map(list => (
          <li key={list.id}>
            <h4>{list.title}</h4><br/>
            <p>{list.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}