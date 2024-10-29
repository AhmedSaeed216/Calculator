import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul className=' flex  flex-row gap-5 font-serif text-2xl p-4 m-3 '>
            <li className='hover:text-red-600 cursor-pointer hover:underline' >Home</li>
            <li className='hover:text-red-600 cursor-pointer hover:underline'>About</li>
            <li className='hover:text-red-600 hover:scale-2  hover:underline cursor-pointer'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar