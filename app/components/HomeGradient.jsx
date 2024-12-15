import React from 'react'

const HomeGradient = () => {
  return (
    <div className='h-screen absolute top-0 left-0 w-full z-[-1]'>
        <div className='dark:bg-AccentPrimary bg-AccentPrimary h-[25rem] w-[50rem] rounded-full blur-[180px] aspect-square absolute right-[-15rem] top-[10rem]'/>
        <div className='dark:bg-AccentPrimary bg-AccentPrimary h-[25rem] w-[50rem] rounded-full blur-[180px] aspect-square absolute left-[-10rem] bottom-[-5rem]'/>
    </div>
  )
}

export default HomeGradient
