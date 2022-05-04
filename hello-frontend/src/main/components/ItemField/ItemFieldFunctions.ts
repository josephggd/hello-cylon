import {ToDoItem} from "../../../dtos/ToDoItem";
import {ToDoList} from "../../../dtos/ToDoList";

export function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function handleItemChanges(
  toDoItem: ToDoItem,
  toDoList:ToDoList,
  toDoItems: ToDoItem[],
  setEditedList: (toDoList: ToDoList) => void,
  index: number
) {
  const allItems = toDoItems;
  allItems[index] = toDoItem;
  const nonNullItems:ToDoItem[] = [];
  allItems.forEach(possiblyNullItem => {
    if (possiblyNullItem !== null && possiblyNullItem.title !== "") {
      nonNullItems.push(possiblyNullItem);
    }
  });
  setEditedList({...toDoList, items:nonNullItems});
}