"use client"

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function LogoutButton() {
  return <Button className="mt-4" onClick={()=> signOut({callbackUrl:`${window.location.origin}/auth`})}>Log Out</Button>;
}
