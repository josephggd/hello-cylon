import {ToDoList} from "../../../dtos/ToDoList";

export interface ViewListsProps {
  lists: ToDoList[];
  selectedList: ToDoList|null;
  setSelectedList: (list: ToDoList) => void;
}