import ClientComponent from "@/components/client.component";
import ServerComponent from "@/components/server.component";

export default function Profile() {

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h3>Profile</h3>
      <ClientComponent />
      <ServerComponent />
    </div>
  );
}