"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {signIn, signOut, getProviders, useSession} from 'next-auth/react';

const Nav = () => {
    const IsUserLoggedIn= true;
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
    <Link href="/" className='flex gap-2 flex-center'>
        <Image
        src="/assets/images/logo.svg"
        alt='Promptopia logo'
        width={30}
        height={30}
        className='object-contain'
        />
        <p className='logo_text'>Prompt Engine</p>
    </Link>
    <div className='sm:flex hidden'>
        {IsUserLoggedIn ? (
            <div>
                <Link rel="stylesheet" href="/create-prompt" className='black_btn' >
                    Create Post
                </Link>
            </div>):
            (<></>)
        }
    </div>
    </nav>
  )
}

export default Nav