import { getVerificationTokenByEmail } from "@/data/verification-token";
import { v4 as uuidv4 } from "uuid";
import { prisma } from "@/prisma/prisma";

export const generateVerificationToken = async (email: string) => {
  // generate a random token
  const token = uuidv4();
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 1); // 1 hour

  // check if token already exists for this email
  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await prisma.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  // create a new verification token
  const verificationToken = await prisma.verificationToken.create({
    data: {
      email,
      token,
      expiresAt: new Date(expiresAt),
    },
  });
  return verificationToken
};