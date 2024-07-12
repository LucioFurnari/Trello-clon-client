import { createContext, useState, useContext } from "react";

interface UserData {
  username: string,
  email: string,
  id: number
}

type UserContextType = {
  user: UserData,
  setUser: React.Dispatch<React.SetStateAction<UserData>>
}

type UserContextProviderProps = {
  children: React.ReactNode
}

const UserContext = createContext<UserContextType | null>(null);

export default function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<UserData>({ username: '', email: '', id: 0 });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUserContext must be used within a UserContextProvider"
    );
  }
  return context;
}