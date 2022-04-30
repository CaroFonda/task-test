import { useEffect, useState } from "react";
import Container from "../components/Container";
import { useTasks } from "../context/taskContext";
import { useRouter } from "next/router";


const inititalState = {
  title: "",
  description: "",
};

const TaskFormPage = () => {
  const [task, setTask] = useState(inititalState);
  const { createTask, updateTask, tasks } = useTasks();
  const router = useRouter();

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!router.query.id) {
      createTask(task.title, task.description);
      // setTask(inititalState);
    } else {
      updateTask(router.query.id, task);
    }

    router.push("/");
  };

  useEffect(() => {
    if (router.query.id) {
      const taskFound = tasks.find((task) => task.id === router.query.id);
      if (taskFound)
        setTask({ title: taskFound.title, description: taskFound.description });
    }
  }, [router.query.id]);

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>
            {router.query.id ? "Edit Task" : "New Task"}
          </h1>
          <input
            type="text"
            placeholder="Write a task"
            autoFocus
            name="title"
            onChange={handleChange}
            value={task.title}
            className="form-control"
          />
          {/* <textarea
            cols="2"
            placeholder="Write a Description"
            name="description"
            onChange={handleChange}
            value={task.description}
          ></textarea> */}

          <button
            className="btn"
            disabled={!task.title}
          >
            Save
          </button>
        </form>
      </div>
    </Container>
  );
};

export default TaskFormPage;