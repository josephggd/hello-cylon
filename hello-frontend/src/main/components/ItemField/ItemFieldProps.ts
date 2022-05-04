import {ToDoItem} from "../../../dtos/ToDoItem";
import {ToDoList} from "../../../dtos/ToDoList";

export interface ItemFieldProps {
  index: number;
  item: ToDoItem;
  field: string;
  value: string;
  editedList: ToDoList;
  setEditedList: (list: ToDoList) => void;
}