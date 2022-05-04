import React from "react";
import { useTasks } from "../context/taskContext";
import Container from "../components/Container";
import { useRouter } from "next/router";
import { VscTrash, VscTasklist } from "react-icons/vsc";

function Home() {
  const { tasks, deleteTask } = useTasks();

  const router = useRouter();

  return (
    <Container> 
      <div>
        {tasks.length === 0 ? (
          <div >
            <h2>There are no tasks</h2>
            <VscTasklist size="8rem" />
          </div>
        ) : (
          <div >
            {tasks.map((task, i) => (
              <div
                key={task.id}
                onClick={() => router.push("/edit/" + task.id)}
              >
                <span>{i + 1}</span>
                <div>
                  <div>
                    <h1>{task.title}</h1>
                    <button
                      className="btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteTask(task.id);
                      }}
                    >
                      <VscTrash /> Delete
                    </button>
                  </div>
                  <p >{task.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}

export default Home;