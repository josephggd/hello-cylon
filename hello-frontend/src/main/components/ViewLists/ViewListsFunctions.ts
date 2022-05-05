import {blankList, ToDoList} from "../../../dtos/ToDoList";

export function deleteList(
  deleteToDoList: (listId: number) => Promise<string>,
  list: ToDoList,
  lists: ToDoList[],
  setShowInput: (showInput: boolean) => void,
  setSelectedList: (list: ToDoList) => void,
  setLists: (lists: ToDoList[]) => void,
) {
  deleteToDoList(list.id!).then(()=>{
    let allLists = lists;
    allLists = allLists.filter(l => l.id!==list.id);
    setSelectedList(blankList);
    setShowInput(false);
    setLists(allLists);
  });
}