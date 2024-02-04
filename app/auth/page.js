import SignInWithGitHub from "@/components/SignInWithGitHub";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";

export default async function AuthRoute() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/");
  }
 
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Please Sign in</CardTitle>
          <CardDescription>
            To Access Private Page You Have To Authenticated.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col ">
            <div className="flex flex-col gap-y-2">
              <Label> Email</Label>
              <Input name="email" type="email" placeholder="name@example.com" />
            </div>
            <Button className="mt-4">Login With Email</Button>
            <SignInWithGitHub />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
