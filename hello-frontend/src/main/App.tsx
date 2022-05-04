import './App.css';
import React, {useEffect} from "react";
import {ToDoList} from "../dtos/ToDoList";
import {ViewLists} from "./components/ViewLists/ViewLists";
import {EditList} from "./components/EditLists/EditList";
import {getAllToDoLists} from "./api/ApiRequests";
import styled from "styled-components";

function App() {
  const [refresh, setRefresh] = React.useState(true);
  const [lists, setLists] = React.useState<ToDoList[]>([]);
  const [selectedList, setSelectedList] = React.useState<ToDoList>({id:null, title:"",description:"",items:[]});
  const [showInput, setShowInput] = React.useState(false);
  useEffect(() => {
    if (refresh) {
      getAllToDoLists().then((response) => {
        return response.toDoLists;
      }).then(setLists);
      setRefresh(false);
    }
  }, [refresh]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={"cylon.gif"} alt={"missing"}/>
        <TwoColumnDiv>
          <ViewLists
            lists={lists}
            setLists={setLists}
            showInput={showInput}
            setShowInput={setShowInput}
            setSelectedList={setSelectedList}
            selectedList={selectedList}/>
          <EditList
            lists={lists}
            setLists={setLists}
            refresh={refresh}
            setRefresh={setRefresh}
            showInput={showInput}
            setShowInput={setShowInput}
            editedList={selectedList}
            setEditedList={setSelectedList}
          />
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
  justify-content: center;
  width: 90%;
`;


export default App;
