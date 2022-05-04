import { useState } from "react";
import Container from "../components/Container";
import { useAuth } from "../context/authContext";
import { useRouter } from "next/router";

const logInPage = () => {
  const router = useRouter();
  const { signin } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signin(user.email, user.password);
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container>
      <div>
        {error && <p style={{color: "red"}}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            placeholder="youremail@company.com"
            onChange={handleChange}
          />
          <br />
          <br />

          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            placeholder="******"
            onChange={handleChange}
          />
          <br />
          <br />
          <button type="submit" className="btn">
            Log In
          </button>
        </form>
      </div>
    </Container>
  );
};

export default logInPage;