'use client'

import { createContext, useState, useContext, useEffect } from "react";
import { verifyToken } from "@/lib/auth";

interface UserData {
  username: string,
  email: string,
  id: number,
  loggedIn: boolean
}

type UserContextType = {
  user: UserData,
  setUser: React.Dispatch<React.SetStateAction<UserData>>,
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
}

type UserContextProviderProps = {
  children: React.ReactNode
}

const UserContext = createContext<UserContextType | null>(null);

export default function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<UserData>({ username: '', email: '', id: 0, loggedIn: false });
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      const userData = await verifyToken()

      // Remove this
      console.log(`User data: ${userData}`)
      if (userData) setUser({ username: userData.username, email: userData.email, id: userData.id, loggedIn: true })
    }
    getUserData();
  }, [isLogged])

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        setIsLogged
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