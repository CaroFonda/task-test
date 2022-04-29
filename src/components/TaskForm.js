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
        setTask({ title: taskFound.title, description: taskFound.description });
    }
  }, [query.id]);

  return (
    <div >
    <div  className="flex-grow text-right px-28 py-5">
      <form onSubmit={handleSubmit}>
        <h5>New Todo</h5>
        <input
          type="text"
          name="description"
          placeholder="Write a task"
          className="form-control"
          onChange={handleChange}
          value={task.description}
        />
        <div> 
        <button className="btn">Add</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default TaskForm;