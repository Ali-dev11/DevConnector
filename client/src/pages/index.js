import React, { Fragment } from 'react';
import { useRouter } from 'next/router';

import Navbar from '@/components/layout/Navbar';
import Landing from '@/components/layout/Landing';

import 'tailwindcss/tailwind.css';

const HomePage = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  const handleSignup = () => {
    router.push('/register');
  };

  return (
    <Fragment>
      <Navbar />
      <Landing />
      <div className="flex justify-center mt-8">
        <button className="text-purple-500 hover:underline" onClick={handleLogin}>Login</button>
        <span className="mx-2 text-gray-500">|</span>
        <button className="text-purple-500 hover:underline" onClick={handleSignup}>Sign up</button>
      </div>
    </Fragment>
  );
};

export default HomePage;
