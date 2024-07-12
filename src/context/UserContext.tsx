import { createContext, useState, useContext } from "react";

interface UserData {
  username: string,
  email: string,
  id: number
}

const UserContext = createContext(null);

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider
      value={{
        username,
        email,
        id
      }}
    >
      {children}
    </UserContext.Provider>
  )
}