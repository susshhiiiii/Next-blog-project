import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

function DarkModeToggle() {
  const {mode,toggle}=useContext(ThemeContext)
  return (
    <div onClick={()=>toggle()} className='cursor-pointer flex border rounded-3xl relative'>      
      <div className='mx-1'>🌙</div>
      <div className='me-1'>☀️</div>
      <div className={`bg-green-600 absolute p-3 rounded-4xl ${mode!=='light'? 'right-0':'left-0'}`}></div>
    </div>
  )
}

export default DarkModeToggle