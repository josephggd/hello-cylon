import {ToDoItem} from "./ToDoItem";

// On the backend we created DTOs; any DTOs must match field names on their frontend counterparts
export interface ToDoList {
  id: number | null;
  title: string;
  description: string;
  items: ToDoItem[];
}

export const blankList:ToDoList = {
  id: null,
  title: "",
  description: "",
  items: []
};
export const testList:ToDoList = {
  id: 1,
  title: "test",
  description: "test",
  items:[]
};
export const testLists = [testList];