import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user] = useState({
    name: "Janani",
    role: "Frontend Developer",
  });

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;