import {ToDoList} from "../dtos/ToDoList";

// These JSON objects contain lists of ToDoList objects.
export interface ToDoListJson {
  toDoLists: ToDoList[];
}