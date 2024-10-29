import React from 'react'

const Button = ({text,onclick}) => {
  return (
    <div className="color-red-900 border border-black  rounded-xl bg-slate-200  text-xl w-12 p-5 m-4 hover:font-bold cursor-pointer" 
    onClick={onclick}>
     {/* <div className='color-blue-400'> */}
        {text}
    </div>
  )
}

export default Button

