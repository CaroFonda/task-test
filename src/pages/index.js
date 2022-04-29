import Container from '../components/Container'
import Link from "next/link";
import {useTasks} from '../context/taskContext';
import TaskForm from '../components/TaskForm';
import ShowTasks from '../components/ShowTasks';

export default function Home() {
  const {tasks} = useTasks();
 
  return (

    <Container>
      <TaskForm /> 
      <ShowTasks />
    </Container>

  );
}