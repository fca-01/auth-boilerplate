import { prisma } from "@/prisma/prisma";

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const lowerCaseEmail = email.toLowerCase();
    const user = await prisma.user.findUnique({
      where: {
        email: lowerCaseEmail
      }
    })

    return user;
  } catch (error) {
    console.error(error);
    return null
  }
}