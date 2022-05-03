import './App.css';
import React, {useEffect} from "react";
import {ToDoList} from "../dtos/ToDoList";
import {ViewLists} from "./components/ViewLists/ViewLists";
import {EditLists} from "./components/EditLists/EditLists";
import {getAllToDoLists} from "./api/ApiRequests";
import styled from "styled-components";

function App() {
  const [lists, setLists] = React.useState<ToDoList[]>([]);
  const [selectedList, setSelectedList] = React.useState<ToDoList | null>(null);
  const [editedList, setEditedList] = React.useState<ToDoList | null>(null);

  useEffect(() => {
    getAllToDoLists().then((response) => {
      return response.toDoLists;
    }).then((listsFromResponse) => {
      setLists(listsFromResponse);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={"cylon.gif"} alt={"missing"}/>
        <TwoColumnDiv>
          <TwinField>
            <ViewLists lists={lists} setSelectedList={setSelectedList} selectedList={selectedList}/>
          </TwinField>
          <TwinField>
            <EditLists list={editedList} setEditedList={setEditedList}/>
          </TwinField>
        </TwoColumnDiv>
      </header>
    </div>
  );
}

const TwoColumnDiv = styled.div`
  border: 1px solid white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`;

const TwinField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`;

export default App;
