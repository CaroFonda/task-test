import { useState, useEffect } from "react";
import {useTasks} from '../context/taskContext';
import {useRouter} from 'next/router';

const TaskForm = () => {

  const [task, setTask] = useState({
    title: "",
    description:""
  });

  const {createTask, updateTask, tasks} = useTasks();
  const {query} = useRouter();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.id) {
      createTask(task.title, task.description);
    } else {
      updateTask(query.id, task);
    }
    e.target.reset();
  };

  useEffect(() => {
    if (query.id) {
      const taskFound = tasks.find((task) => task.id === query.id);
      if (taskFound)
        setTask({description: taskFound.description});
    }
  }, [query.id]);

  return (
    <div >
    <div>
      <form onSubmit={handleSubmit}>
        <h3>{query.id ? "Edit Task" : "New Task"}</h3>
        <input
          type="text"
          name="title"
          placeholder="Write a task"
          onChange={handleChange}
          value={task.title}
          autoFocus
        />
        <input
          type="text"
          name="description"
          placeholder="Write a task"
          onChange={handleChange}
          value={task.description}
          autoFocus
        />
        <div> 
        <button className="btn">
          {query.id ? "Update" : "Add"}
        </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default TaskForm;