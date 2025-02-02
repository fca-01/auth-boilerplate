import { prisma } from "@/prisma/prisma";

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const token = await prisma.verificationToken.findFirst({
      where: {
        email,
      },
    });
    return token;
  } catch (error) {
    console.error("Error retrieving verification token:", error);
    return null;
  }
};

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await prisma.verificationToken.findFirst({
      where: {
        token: token
      }
    })

    return verificationToken;
  } catch (error) {
    console.log(error);
  }

}