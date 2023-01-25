export interface ITodoList {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
export interface IUpdateTodo {
  title: string;
  content: string;
  id: string;
}
