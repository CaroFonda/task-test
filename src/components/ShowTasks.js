import {useTasks} from '../context/taskContext';
import {useRouter} from 'next/router';

const ShowTasks = () => {
    const {tasks} = useTasks();
    const {push} = useRouter();

    return(
        <div className="tasks">
            {
                tasks.length === 0 ? (
                <h2>There are no tasks</h2>
                ) : (
                <div>
                    {tasks.map((task) => (
                    <div key={task.id} onClick={()=>push("/edit/" + task.id)}>
                        <span>{task.id}</span>
                        <div>
                            <h5>{task.description}</h5>
                            <button>X</button>
                        </div>
                    </div>
                    ))}
                </div>
                )
            }
        </div>
    )};

export default ShowTasks;