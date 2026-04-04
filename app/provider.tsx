"use client";

import React, { useEffect } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import Header from "./_components/Header";

export default function Provider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const createUser = useMutation(api.user.CreateNewUser);

  useEffect(() => {
    const saveUser = async () => {
      if (user) {
        await createUser({
          email: user?.primaryEmailAddress?.emailAddress ?? "",
          imageUrl: user?.imageUrl ?? "",
          name: user?.fullName ?? "",
        });
      }
    };
    saveUser();
  }, [user, createUser]);

  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
