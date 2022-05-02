import axios from "axios";
import {ToDoList} from "../../dtos/ToDoList";
import {ToDoListJson} from "../../jsons/ToDoListJson";
const failedToPut = "PUT request failed";
const failedToPost = "POST request failed";
const failedToGet = "GET request failed";
const failedToDelete = "DELETE request failed";

// Export an asynchronous function that makes a GET request & returns response.data
export async function getAllToDoLists():Promise<ToDoListJson> {
  try {
    // axios makes a GET request to the specified URL
      const response = await axios.get("localhost:9090/data");
      // If the response is successful, return the response data
      if (response.status === 200) {
          return response.data;
      // If the response is not successful, throw an error
      } else {
          throw new Error(failedToGet);
      }
      // We catch the error we threw and return a JSON with an empty list
  } catch {
    return {toDoLists:[]};
  }
}

export async function postNewToDoList(newToDoList : ToDoList):Promise<string> {
  try {
      const response = await axios.post("localhost:9090/data", newToDoList);
      if (response.status===200){
        return "SAVED";
      } else {
        throw new Error(failedToPost);
      }
  } catch {
    return failedToPost;
  }
}

export async function putUpdateToDoList(existingToDoList : ToDoList):Promise<string> {
  try {
    const response = await axios.put("localhost:9090/data", existingToDoList);
    if (response.status===200){
      return "UPDATED";
    } else {
      throw new Error(failedToPut);
    }
  } catch {
    return failedToPut;
  }
}

export async function deleteToDoList(id : number):Promise<string> {
  try {
    const response = await axios.delete("localhost:9090/list/"+id);
    if (response.status===200){
      return "DELETED";
    } else {
      throw new Error(failedToDelete);
    }
  } catch {
    return failedToDelete;
  }
}

export async function deleteToDoItem(id : number):Promise<string> {
  try {
    const response = await axios.delete("localhost:9090/item/"+id);
    if (response.status===200){
      return "DELETED";
    } else {
      throw new Error(failedToDelete);
    }
  } catch {
    return failedToDelete;
  }
}