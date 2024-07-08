"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      await signOut();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      
      
       <br />

      <button onClick={logout}>Sign out</button>
    </div>
  );
};

export default DashboardPage;
