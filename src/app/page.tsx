"use client"

import HomePage from "@/components/HomePage";
import UserHomePage from "@/components/UserHomePage";
import { useUserContext } from "@/context/UserContext";

export default function Home() {
  const { user } = useUserContext();

  return (
    <>
    {
      user.loggedIn ?
      <UserHomePage />
      :
      <HomePage />
    }
    </>
  );
}
