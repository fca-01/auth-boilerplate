import { auth } from "@/auth";


export default async function getUserSession() {
  const session = await auth();

  return {
    session,
  };
}