import {ToDoItem} from "./ToDoItem";

// On the backend we created DTOs; any DTOs must match field names on their frontend counterparts
export interface ToDoList {
  id: number | null;
  title: string;
  description: string;
  items: ToDoItem[];
}