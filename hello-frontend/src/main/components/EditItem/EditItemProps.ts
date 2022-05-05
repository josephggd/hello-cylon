import {ToDoItem} from "../../../dtos/ToDoItem";
import {ToDoList} from "../../../dtos/ToDoList";

export interface EditItemProps {
  index: number;
  editedList: ToDoList;
  setEditedList: (list: ToDoList) => void;
  item: ToDoItem;
  items: (ToDoItem|null)[];
}