"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import {
  LoginButton,
  LogoutButton,
  RegisterButton,
} from "@/components/buttons.component";
import Link from "next/link";

const ClientComponent = () => {
  const { data: session } = useSession();

  return (
    <div className="ClientComponent">
      {session ? (
        <div>
          <div>
            <Image
              src={session.user?.image || "/next.svg"}
              alt={session.user?.name || "User"}
              width={50}
              height={50}
            />
          </div>
          <div>
            <span>Logged in as: {session.user?.name}</span>
          </div>
          <div>
            <LogoutButton />
          </div>
          <div>
            <Link href="/">Home</Link>
          </div>
        </div>
      ) : (
        <>
          <LoginButton />
          <RegisterButton />
        </>
      )}
    </div>
  );
};

export default ClientComponent;
