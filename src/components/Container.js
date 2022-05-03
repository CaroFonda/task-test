import Link from "next/link";
import { useRouter } from "next/router";
import { useTasks } from "../context/taskContext";
import { AiOutlinePlus } from "react-icons/ai";
import { useAuth } from "../context/authContext";

const Container = ({ children }) => {
  const router = useRouter();
  const { tasks } = useTasks();
  const { signup } = useAuth();
  

  return (
    <div>
      <header>
        <Link href="/">
          <a>
            <h1>TODO LIST</h1>
          </a>
        </Link>

        <span>
          {tasks.length} tasks
        </span>
      </header>

    <div className="container">
      <div className="addbtn">
          <button
            className="btn"
            onClick={() => router.push("/new")}
          >
            <AiOutlinePlus className="mr-2" />
            Add
          </button>
        </div>

      <main>{children}</main>
    </div>
    </div>
  );
};

export default Container;