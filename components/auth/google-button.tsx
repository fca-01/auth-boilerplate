'use client';

import { googleAuthenticate } from '@/actions/google-login';
import React from 'react'
import { useActionState } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

const GoogleLogin = () => {
  const [errorMsgGoogle, dispatchGoogle] = useActionState(googleAuthenticate, undefined)
  return (
    <form className="flex mt-4" action={dispatchGoogle}>
      <Button variant={"outline"} className='flex flex-row items-center gap-3 w-full'>
        <Image src={'/google.svg'} width={16} height={16} alt='Google Icon' />
        <span>Continue with Google</span>
      </Button>
      <p>{errorMsgGoogle}</p>
    </form>
  )
}

export default GoogleLogin;