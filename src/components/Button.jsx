import React from 'react'

const Button = ({text,onclick,className}) => {
  return (
    <div className={`color-red-900 border border-black  rounded-xl bg-slate-200  text-xl w-15 p-3 m-2 flex justify-center hover:font-bold cursor-pointer ${className}` }
    onClick={onclick}>
     {/* <div className='color-blue-400'> */}
        {text}
    </div>
  )
}

export default Button

