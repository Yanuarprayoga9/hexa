import { TodoToShow } from "@/domain/todo";
import React, { FC } from "react";
interface TodoListProps {
 todos: TodoToShow[];
}
const TodoList: FC<TodoListProps> = ({ todos }) => {
 return (
  <ul className="space-y-4">
   {todos.map((todo, index) => (
    <li key={index}>
     <p>{todo.todo}</p>
     <p>{todo.completed ? "Todo completed" : "Todo Not Completed"}</p>
    </li>
   ))}
  </ul>
 );
};
export default TodoList;