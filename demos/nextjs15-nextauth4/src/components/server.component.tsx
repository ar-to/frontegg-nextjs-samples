'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";

const ServerComponent = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div
      style={{
        overflow: "scroll",
        width: '100%'
      }}
      className="ServerComponent"
    >
      <div>
        <h1>Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>
        <div>user session server side: {JSON.stringify(session?.user)}</div>;
        <div>user session expires: {JSON.stringify(session?.expires)}</div>
      </div>
    </div>
  );
}

export default ServerComponent;