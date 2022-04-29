import {useTasks} from '../context/taskContext';
import {useRouter} from 'next/router';

const ShowTasks = () => {
    const {tasks, deleteTask} = useTasks();
    const {push} = useRouter();

    return(
        <div>
            {
                tasks.length === 0 ? (
                <div> 
                    <h2>There are no tasks</h2>
                </div>
                ) : (
                <div>
                    {tasks.map((task) => (
                    <div key={task.id} onClick={()=>push("/edit/" + task.id)}>
                        <div><h1>{task.id}</h1></div>
                        <div><h5>{task.description}</h5></div>
                        <div> 
                            <button className="btn" onClick={(e)=>{
                                e.stopPropagation();
                                deleteTask(task.id);
                                }}>Delete</button>
                        </div>
                    </div>
                    ))}
                </div>
                )
            }
        </div>
    )};

export default ShowTasks;