import Link from "next/link";
import { useRouter } from "next/router";
import { useTasks } from "../context/taskContext";
import { AiOutlinePlus } from "react-icons/ai";

const Container = ({ children }) => {
  const router = useRouter();
  const { tasks } = useTasks();

  return (
    <div className="container">
      <header>
        <Link href="/">
          <a>
            <h1>Task App</h1>
          </a>
        </Link>

        <span>
          {tasks.length} tasks
        </span>

        <div>
          <button
            
            onClick={() => router.push("/new")}
          >
            <AiOutlinePlus className="mr-2" />
            Add Task
          </button>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
};

export default Container;