"use client";

import { FC, useState } from "react";
import Button from "@/ui/Button";
import { toast } from "@/ui/Toast";

interface ISignOutButtonProps {}

const SignOutButton: FC<ISignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signOutWithGoogle = async () => {
    setIsLoading(true)
    try {
    } catch (error) {
      toast({
        title: "Error signing out",
        message: "Please try again later",
        type: "error",
      });
    }
  };
  return (
    <Button onClick={signOutWithGoogle} isLoading={isLoading}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
