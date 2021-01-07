import React from "react";
import { useSelector } from "react-redux";

// Components
import TodoItem from "../../components/TodoItem/TodoItem";
const TodoList = () => {
  const taskobj = useSelector((state) => state.todos.todos);
  console.log(taskobj);
  const taskItems = taskobj.map((task) => {
    return <TodoItem task={task} />;
  });

  return <div>{taskItems}</div>;
};

export default TodoList;
