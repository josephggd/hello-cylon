import {ToDoList} from "../../../dtos/ToDoList";

export interface EditListProps {
  lists: ToDoList[];
  setLists: (lists: ToDoList[]) => void;
  refresh: boolean;
  setRefresh: (showInput: boolean) => void;
  showInput: boolean;
  setShowInput: (showInput: boolean) => void;
  editedList: ToDoList;
  setEditedList: (list: ToDoList) => void;
}