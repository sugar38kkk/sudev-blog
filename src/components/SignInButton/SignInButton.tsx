"use client";

import { FC, useState } from "react";
import Button from "@/ui/Button";
import { toast } from "@/ui/Toast";

interface ISignInButtonProps {}

const SignInButton: FC<ISignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
    } catch (error) {
      toast({
        title: "Error signing in",
        message: "Please try again later",
        type: "error",
      });
    }
  };
  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign In
    </Button>
  );
};

export default SignInButton;
