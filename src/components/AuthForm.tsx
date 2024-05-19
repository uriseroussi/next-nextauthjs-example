'use client';

import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import { FormEvent, useState } from 'react';
import GoogleIcon from './GoogleIcon';

interface Props {
  session: Session | null;
}

export default function AuthForm({ session }: Props) {
  const [email, setEmail] = useState('');

  const handleEmailSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent form submission from refreshing the page
    await signIn('nodemailer', { email, callbackUrl: '/protected' });
  };

  const handleGoogleSignIn = async () => {
    await signIn('google', { callbackUrl: '/protected' });
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <div className="p-4 mx-auto rounded-md w-[22rem] h-[30rem] shadow-lg">
      {!session && (
        <>
          <img
            src="/logo.png"
            alt="auth.js logo"
            className="block w-14 mx-auto"
          />
          <h1 className="mt-5 text-center">Welcome</h1>
          <p className="mt-4 text-center">
            Log in to continue to Next Auth Example
          </p>
          <form onSubmit={handleEmailSignIn} className="mt-4">
            <input
              required
              name="email"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
            <button className="bg-emerald-600 text-white mt-4 w-full">
              Continue
            </button>
          </form>

          <div className="flex mt-6 gap-2 items-center [&>div]:h-[1px] [&>div]:bg-black [&>div]:flex-1">
            <div />
            <span className="text-xs leading-4">OR</span>
            <div />
          </div>

          <button onClick={handleGoogleSignIn} className="w-full mt-4">
            <GoogleIcon />
            Continue with Google
          </button>
        </>
      )}

      {session && (
        <div className="flex flex-col justify-between h-full">
          <img
            src="/logo.png"
            alt="auth.js logo"
            className="self-center w-3/4 flex-1 object-contain"
          />
          <button onClick={handleSignOut} className="w-full mt-4">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
