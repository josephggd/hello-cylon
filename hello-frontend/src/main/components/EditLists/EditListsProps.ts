import {ToDoList} from "../../../dtos/ToDoList";

export interface EditListsProps {
  list: ToDoList|null;
  setEditedList: (list: ToDoList) => void;
}