import { createContext, useContext, useState } from "react";

export const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([{
        title: "My first task",
        description: "This is my first task",
        id: 1
    }]);

    const createTask = ({title,  description}) => {
        setTasks([...tasks, {
            title, 
            description, 
            id: `${tasks.length + 1}`}
        ]);
    };

    const updateTask = (id, updatedTask) => setTasks([...tasks.map((task) => task.id === id ? { ...task, ...updatedTask } : task)]);

    const deleteTask = (id) => setTasks([...tasks.filter((task) => task.id !== id)]);

    return (
        <TaskContext.Provider value={{tasks, createTask, updateTask, deleteTask}}>{children}</TaskContext.Provider>
    );
};