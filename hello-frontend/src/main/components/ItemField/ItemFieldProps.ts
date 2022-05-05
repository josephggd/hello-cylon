import {ToDoItem} from "../../../dtos/ToDoItem";
import {ToDoList} from "../../../dtos/ToDoList";

export interface ItemFieldProps {
  index: number;
  max: number;
  item: ToDoItem;
  field: string;
  value: string;
  editedList: ToDoList;
  setEditedList: (list: ToDoList) => void;
  handleItemChange: (
    toDoItem: ToDoItem,
    toDoList:ToDoList,
    toDoItems: ToDoItem[],
    setEditedList: (toDoList: ToDoList) => void,
    index: number
  ) => void;
}