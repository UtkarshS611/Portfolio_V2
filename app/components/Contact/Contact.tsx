import { Github, InstagramIcon, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen'>
        <h2 className='text-4xl sm:text-2xl md:text-4xl lg:text-7xl xl:text-9xl'>Have an Idea?</h2>
        <p>Drop me a email:</p>
        <a href="mailto:utkarsh49931@gmail.com" className='uppercase mt-3'>
            utkarsh49931@gmail.com
        </a>
    </div>
    <footer className='w-full md:max-w-[70%] flex flex-col md:flex-row justify-between items-center mx-auto md:border-t-[1px] py-2 border-black/80 dark:border-white'>
      <div className='flex md:hidden items-center gap-3 my-2'>
      <a
          href=""
          className="hover:text-[#469d89] dark:hover:text-[#bd68ee] opacity-70"
        >
          <Github />
        </a>
        <a
          href=""
          className="hover:text-[#469d89] dark:hover:text-[#bd68ee] opacity-70"
        >
          <InstagramIcon />
        </a>
        <a
          href=""
          className="hover:text-[#469d89] dark:hover:text-[#bd68ee] opacity-70"
        >
          <Linkedin />
        </a>
        <a
          href=""
          className="hover:text-[#469d89] dark:hover:text-[#bd68ee] opacity-70"
        >
          <Twitter />
        </a>
      </div>
      <div>©️ 2024, Utkarsh Singh</div>
      <div>Made with 💝 and Coffee ☕</div>
    </footer>
    </>
  )
}

export default Contact