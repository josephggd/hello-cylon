import {ToDoItem} from "../dtos/ToDoItem";

// These JSON objects contain lists of ToDoItem objects.
export interface ToDoItemJson {
  toDoItems: ToDoItem[];
}