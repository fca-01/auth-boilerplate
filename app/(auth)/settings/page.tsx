import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function Settings() {
  const session = await auth();
  return (
    <div>
      <h1>Settings</h1>
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <Button variant={'default'} className="bg-primary" type="submit">Sign Out</Button>
      </form>
    </div>
  );
}