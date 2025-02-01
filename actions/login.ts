'use server'

import * as z from 'zod'
import { LoginSchema } from '@/schemas'
import { signIn } from '@/auth'
import { AuthError } from 'next-auth'
import { prisma } from '@/prisma/prisma'

export const login = async (data: z.infer<typeof LoginSchema>) => {
  const validatedData = LoginSchema.parse(data);

  if (!validatedData) {
    return { error: 'Invalid input data' }
  }

  const { email, password } = validatedData;

  const userExists = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!userExists || !userExists.password || !userExists.email) {
    return { error: 'Invalid email or password' }
  }

  try {
    await signIn('credentials', {
      email: userExists.email,
      password: password,
      redirectTo: '/dashboard',
    });

  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid email or password' }
        default:
          return { error: 'Please confirm your email and try again' }
      }
    }
    return error
  }

  return { success: 'You have successfully logged in' }

}