import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import LogoutButton from "@/components/LogoutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="p-10 ">
      <h1>Hello from Home page</h1>
      {session ? (
        <div>
          <h1>You Are Logged In</h1>
          <LogoutButton className="mt-4" />
        </div>
      ) : (
        <h1>Your Not Logged In</h1>
      )}
    </div>
  );
}
