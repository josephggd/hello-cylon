export interface ToDoItem {
  id: number | null;
  title: string;
  description: string;
}
export const blankItem: ToDoItem = {
  id: null,
  title: "",
  description: ""
}

export const testItem:ToDoItem = {
  id: 1,
  title: "test",
  description: "test"
};
export const testItems = [testItem];