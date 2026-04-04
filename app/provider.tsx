"use client";

import React, { useEffect, useState, useContext } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import Header from "./_components/Header";
import { UserDetailContext } from "@/context/UserDetailContext";

export default function Provider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const createUser = useMutation(api.user.CreateNewUser);
  const [userDetail, setUserDetail] = useState<any>();

  useEffect(() => {
    const saveUser = async () => {
      if (user) {
        const result = await createUser({
          email: user?.primaryEmailAddress?.emailAddress ?? "",
          imageUrl: user?.imageUrl ?? "",
          name: user?.fullName ?? "",
        });
        setUserDetail(result);
      }
    };
    saveUser();
  }, [user, createUser]);

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>

      <div>
        <Header />
        {children}
      </div>
    </UserDetailContext.Provider>
  );
}

export const useUserDetail = () => useContext(UserDetailContext);