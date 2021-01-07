import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../actions";

const TodoItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  // const selectedTask = useSelector((state) =>
  //   state.todos.todos.find((e) => e.id === task.id)
  // );
  // console.log("selectedTask", selectedTask);
  function editItemToState(e) {
    e.preventDefault();

    e.target.userInput.value = "";
  }
  const renderItem = () => {
    return (
      <>
        {task.task}
        <button onClick={() => setIsUpdate(true)}>Edit</button>
        <button onClick={() => dispatch(deleteTodo(task.id))}>Delete</button>
      </>
    );
  };
  const renderForm = () => {
    return (
      <form onSubmit={editItemToState}>
        <input type='text' name='userInput' defaultValue={task.task} />
        <button
          type='submit'
          onClick={() => dispatch(updateTodo({ task: task.message }))}
        >
          Edit Todo
        </button>
      </form>
    );
  };

  return (
    <>
      <p></p>
      <div key={task.id}>{isUpdate ? renderForm() : renderItem()}</div>
    </>
  );
};

export default TodoItem;
