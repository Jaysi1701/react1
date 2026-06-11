import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Home() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Home Page</h2>

      <h3>Logged In User</h3>

      <p>Name: {user.name}</p>

      <p>Role: {user.role}</p>
    </div>
  );
}

export default Home;