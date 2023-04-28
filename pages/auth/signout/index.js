// pages/auth/signout.js
import { signOut } from "next-auth/react";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
export default function index() {
  const router = useRouter();

  const { data: session, status } = useSession();
  console.log("session", session, "status", status);

  useEffect(() => {
    if (status === "authenticated") {
      signOut({ callbackUrl: "/" });
    } else if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);

  return <div></div>;
}
