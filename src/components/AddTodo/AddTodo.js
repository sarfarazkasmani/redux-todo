import React, { useState } from "react";
import cuid from "cuid";
import { addTodo } from "../../actions";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [tasks, setTasks] = useState("");

  const dispatch = useDispatch();

  function handleFormSubmit(e) {
    e.preventDefault();
    setTasks(dispatch(addTodo({ task: tasks, id: cuid() })));
    e.target.userInput.value = "";
  }
  function handleInputChange(e) {
    setTasks(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type='text'
          name='userInput'
          value={tasks.task}
          onChange={(e) => handleInputChange(e)}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
