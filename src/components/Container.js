import Link from "next/link";
import { useRouter } from "next/router";
import { useTasks } from "../context/taskContext";
import { AiOutlinePlus } from "react-icons/ai";
import { useAuth } from "../context/authContext";

const Container = ({ children }) => {
  const router = useRouter();
  const { tasks } = useTasks();
  const { signup, user, signout } = useAuth();
  console.log(user);

  return (
    <div>
      <header>
        <Link href="/">
          <a>
            <h1 style={{ marginLeft: "40px" }}>TODO LIST</h1>
          </a>
        </Link>

        <span style={{ textAlign: "center", alignContent: "flex-end" }}>{tasks.length} tasks</span>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          {user ? (
            <button onClick={signout} className="btn">
              Logout
            </button>
          ) : (
            <>
              <button onClick={() => router.push("/login")} className="btn">
                Login
              </button>
              <button onClick={() => router.push("/register")} className="btn">
                Signup
              </button>
            </>
          )}
        </div>
      </header>
      <br />
      <div
        style={{ display: "flex", justifyContent: "center", color: "GrayText" }}
      >
        {user ? <h1>Welcome {user.email}</h1> : <h1>Welcome!</h1>}
      </div>
      <div className="container">
        <div className="addbtn">
          <button className="btn" onClick={() => router.push("/new")}>
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
