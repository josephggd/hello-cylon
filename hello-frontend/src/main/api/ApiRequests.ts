import axios from "axios";
import {ToDoList} from "../../dtos/ToDoList";
import {ToDoListJson} from "../../jsons/ToDoListJson";
import {ToDoItem} from "../../dtos/ToDoItem";

export const failedToPut = "PUT request failed";
export const failedToPost = "POST request failed";
export const failedToGet = "GET request failed";
export const failedToDelete = "DELETE request failed";
export const baseUrl = "http://localhost:9090/data/";
export const postNewListUrl = baseUrl + "save/list";
export const postNewItemUrl = baseUrl + "save/item";
export const getListsUrl = baseUrl + "all";
export const putListUrl = baseUrl + "update/list";
export const putItemUrl = baseUrl + "update/item";
export const deleteListUrl = baseUrl + "remove/list/";
export const deleteItemUrl = baseUrl + "remove/item/";
// Export an asynchronous function that makes a GET request & returns response.data
export async function getAllToDoLists():Promise<ToDoListJson> {
  try {
    // axios makes a GET request to the specified URL
      const response = await axios.get(getListsUrl);
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
    const response = await axios.post(postNewListUrl, newToDoList);
    if (response.status===200){
      return "SAVED";
    } else {
      throw new Error(failedToPost);
    }
  } catch {
    return failedToPost;
  }
}

export async function postNewToDoItem(newToDoItem: ToDoItem):Promise<string> {
  try {
    const response = await axios.post(postNewItemUrl, newToDoItem);
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
    const response = await axios.put(putListUrl, existingToDoList);
    if (response.status===200){
      return "UPDATED";
    } else {
      throw new Error(failedToPut);
    }
  } catch {
    return failedToPut;
  }
}

export async function putUpdateToDoItem(existingToDoItem: ToDoItem):Promise<string> {
  try {
    const response = await axios.put(putItemUrl, existingToDoItem);
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
    const response = await axios.delete(deleteListUrl+id);
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
    const response = await axios.delete(deleteItemUrl+id);
    if (response.status===200){
      return "DELETED";
    } else {
      throw new Error(failedToDelete);
    }
  } catch {
    return failedToDelete;
  }
}