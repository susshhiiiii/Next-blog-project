import React from 'react'
import Image from 'next/image'
function About() {
  return (
    <div className='relative'>
      <Image className='w-full h-72 z-0 bg-amber-50 filter grayscale object-cover' src={'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} width={400} height={1024} alt={''}></Image>
      <div className='absolute px-2 py-1 bottom-6 left-4 font-extrabold bg-green-400 text-white'>
        <h1 className='text-4xl'>Digital Storytellers</h1>
        <h2 className='text-2xl'>Handcrafting award winning digital experiences</h2>
      </div>
    </div>
  )
}

export default About