"use client";
import { Github } from "lucide-react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export default function SignInWithGitHub() {
  return (
    <Button
      onClick={() =>
        signIn("github", {
          callbackUrl: `${window.location.origin}`,
        })
      }
      className="mt-4"
      variant="secondary"
    >
      Login With Github <Github className="w-4 h-4 ml-4" />
    </Button>
  );
}
