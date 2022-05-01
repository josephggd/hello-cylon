import axios from "axios";
import {ToDoList} from "../../dtos/ToDoList";

// Export an asynchronous function that makes a GET request & returns response.data
export async function getAllToDoLists() {
  const response = await axios.get("localhost:9090/data");
  return response.data;
}

export async function postNewToDoList(newToDoList : ToDoList) {
  const response = await axios.post("localhost:9090/data", newToDoList);
  return response.data;
}