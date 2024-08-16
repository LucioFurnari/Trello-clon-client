'use client'

import { createContext, useState, useContext, useEffect } from "react";
import { verifyToken } from "@/lib/auth";
import { usePathname } from "next/navigation";

interface UserData {
  username: string,
  email: string,
  id: number,
  // loggedIn: boolean
}

type UserContextType = {
  user: UserData,
  setUser: React.Dispatch<React.SetStateAction<UserData>>,
  isLogged: boolean,
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
}

type UserContextProviderProps = {
  children: React.ReactNode
}

const UserContext = createContext<UserContextType | null>(null);

export default function UserContextProvider({ children }: UserContextProviderProps) {
  const pathname = usePathname();
  const [user, setUser] = useState<UserData>({ username: '', email: '', id: 0 });
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      const userData = await verifyToken()

      if (userData) { 
        setUser({ username: userData.username, email: userData.email, id: userData.id })
        setIsLogged(true);
      } else {
        setIsLogged(false)
      }
    }
    getUserData();
  }, [isLogged, pathname])

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        setIsLogged,
        isLogged
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