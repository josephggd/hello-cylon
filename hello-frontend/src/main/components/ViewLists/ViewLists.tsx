import React from "react";
import styled from "styled-components";
import {ViewListsProps} from "./ViewListsProps";
import Button from '@mui/material/Button';
import {deleteList} from "./ViewListsFunctions";
import {deleteToDoList} from "../../api/ApiRequests";

export function ViewLists(props:ViewListsProps) {
  return (
    <div className="ContainerCol">
      <h3 data-testid={"view-lists-header"}>View Lists</h3>
      <ul>
        {props.lists.length>0 && props.lists.map((list, index) => (
          <ViewList
            key={index}
            data-testid={"view-list-"+index}
            onClick={() => {
              props.setSelectedList(list);
              if (!props.showInput) {
                props.setShowInput(true);
              }
            }}
          >
            {list.title} : {list.description}
            <Button
              data-testid={"delete-list-"+index}
              variant="contained"
              color="error" onClick={()=>{
              deleteList(deleteToDoList, list, props.lists, props.setShowInput, props.setSelectedList, props.setLists);
            }
            }>DELETE</Button>
          </ViewList>
        ))}
        {props.lists.length === 0 && <p data-testid={"no-lists"}>No lists to show</p>}
      </ul>
    </div>
  );
}

const ViewList = styled.li`
  display: flex;
  font-size: 20px;
  border-radius: 5px;
  padding: 10px;
  justify-content: space-between;
  width:380px;
  height:60px;
  background-color:#2b2d2f;
  color:white;
  :hover {
    background-color:#3a6fd8;
    color:#2b2d2f;
  }
  overflow:auto;
`;