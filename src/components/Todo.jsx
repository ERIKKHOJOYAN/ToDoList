import React from "react";
import "./Todo.scss";
import deleteimg from "../assets/trash.png";
import { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [score, setScore] = useState(0);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask !== "") {
      setTasks([...tasks, { text: newTask }]);
      setNewTask("");
      setScore(score + 1);
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setScore(score - 1);
  };

  return (
    <div className="Todo">
      <div className="Todo__Search">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask} // Controlled input
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>+</button>
      </div>

      <div className="Todo__List">
        <p>Tasks to do - {score}</p>
        {tasks.map((task, index) => (
          <div key={index} className="Todo__Task">
            {task.text}
            <img
              src={deleteimg}
              alt="delete img"
              onClick={() => handleDeleteTask(index)}
              className="deleteTask"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
