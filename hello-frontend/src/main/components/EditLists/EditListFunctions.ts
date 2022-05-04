import {ToDoList} from "../../../dtos/ToDoList";
import {ToDoItem} from "../../../dtos/ToDoItem";

export function handleSubmit(
  toDoList:ToDoList,
  toDoItems:ToDoItem[],
  submitList:(toDoList:ToDoList) => Promise<string>,
  setEditedList:(toDoList:ToDoList) => void,
  setRefresh:(refresh:boolean) => void
) {
  let items:ToDoItem[] = [];
  toDoItems.forEach(item => {
    if (item.title!=="" && item.description!=="") {
      items.push(item);
    }
  });
  submitList({...toDoList, items:items})
    .then(() => {
      setEditedList({id:null, title:"", description:"", items:[]});
      setRefresh(true);
    });
}