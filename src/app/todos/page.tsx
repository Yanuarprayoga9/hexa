import getTodoList from "@/data-access/get-todo-list.persistance";
import getTodoListUseCase from "@/use-cases/get-todo-list.use-case";
import React from "react";
import TodoList from "./_components/todo-list";

const TodoListPage = async () => {
  const { ok, todos, message } = await getTodoListUseCase({
    getData: getTodoList,
  });
  console.log(todos);
  if (!ok) return <p className="text-red-500">{message}</p>;
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoListPage;
