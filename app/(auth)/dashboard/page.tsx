import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const Dashboard = async () => {
  const session = await auth();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Dashboard</h1>
      <p>Welcome, {session?.user?.name}!</p>

      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <Button variant={'outline'} type="submit">Sign Out</Button>
      </form>
    </div>
  );
};

export default Dashboard;