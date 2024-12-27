"use client"

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const About = () => {

    const {theme} = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
      }, []);
    
      if (!mounted) {
        return null;
      }

  return (
    <div className='flex flex-col-reverse xl:flex-row items-center lg:px-48 md:px-36 sm:px-24 px-4 gap-24 h-screen'>
        <div>
            {theme === 'dark' ? (
                <Image height={300} width={600} src='/AboutDark.svg' alt='About'/>
            ) : (
                <Image height={300} width={600} src='/AboutLight.svg' alt='About'/>
            )}
        </div>
        <div className='w-full space-y-4'>
            <p>
            Hello! My name is Utkarsh and I enjoy creating things that live on the internet. My interest in web development started back in 2023 when I started exploring the web — turns out hacking together and learning about web took me very far as a developer and learned much more than HTML & CSS.
            </p>
            <p>
            Here are a few technologies I’ve been working with recently:
            </p>
            <div className='flex gap-4 aboutList'>
                <ul className='list-disc list-inside'>
                    <li>JavaScript (ES6+)</li>
                    <li>Next.js</li>
                    <li>Framer Motion</li>
                </ul>
                <ul className='list-disc list-inside'>
                    <li>MongoDb</li>
                    <li>Prisma</li>
                    <li>Typescript</li>
                </ul>
                <ul className='list-disc list-inside'>
                    <li>Redux</li>
                    <li>Appwrite</li>
                    <li>Auth.js</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About