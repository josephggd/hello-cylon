import React from "react";
import styled from "styled-components";
import {ViewListsProps} from "./ViewListsProps";

export function ViewLists(props:ViewListsProps) {
  return (
    <div className="ContainerCol">
      <h1>View Lists</h1>
      <div>
        {props.lists.map(list => (
          <ViewList
            key={list.id}
            onClick={() => {
              props.setSelectedList(list);
              props.setShowInput(true);
            }}
          >
            {list.title} : {list.description}<br/><br/>
            <li>
              {list.items.map((item) => (
                <ul>{item.title} : {item.description}</ul>
              ))}
            </li>
          </ViewList>
        ))}
      </div>
    </div>
  );
}

const ViewList = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #2b2d2f;
  width:300px;
  height:75px;
  :hover {
    background-color:#2b2d2f;
  }
  overflow: auto;
`;