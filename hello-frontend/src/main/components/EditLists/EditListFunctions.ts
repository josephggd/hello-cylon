import {blankList, ToDoList} from "../../../dtos/ToDoList";
import {ToDoItem} from "../../../dtos/ToDoItem";
import {postNewToDoList, putUpdateToDoList} from "../../api/ApiRequests";

export function handleSubmit(
  toDoList:ToDoList,
  toDoItems:ToDoItem[],
  setEditedList:(toDoList:ToDoList) => void,
  setRefresh:(refresh:boolean) => void
) {
  const submitList = toDoList.id!=null ? putUpdateToDoList : postNewToDoList;
  if (toDoList.title.length > 0 && toDoList.description.length > 0) {
    const newList:ToDoList = {...toDoList, items: toDoItems};
    submitList(newList).then(() => {
      setEditedList(blankList);
      setRefresh(true);
    });
  }
}