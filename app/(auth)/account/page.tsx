

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import getUserSession from "@/functions/getUserSession";
import Image from "next/image";


export default async function Account() {
  const { session } = await getUserSession();
  console.log('user session', session);

  return (
    <div>
      <h1>Account</h1>
      <Card className="w-96 flex flex-col items-center justify-center">
        <Image src={'/avatar/male1.png'} alt="Profile" width={70} height={70} className="" />
        <div>{session?.user?.name}</div>
      </Card>
    </div>
  );
}