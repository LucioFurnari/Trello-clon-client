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
  setUser: React.Dispatch<React.SetStateAction<UserData>>
}

type UserContextProviderProps = {
  children: React.ReactNode
}

const UserContext = createContext<UserContextType | null>(null);

export default function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<UserData>({ username: '', email: '', id: 0, loggedIn: false });

  useEffect(() => {
    const getUserData = async () => {
      const userData = await verifyToken()

      console.log(userData)
      if (userData) setUser({ username: userData.username, email: userData.email, id: userData.id, loggedIn: true })
    }
    getUserData();
  }, [])

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