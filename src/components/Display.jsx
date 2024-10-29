import React from 'react'

const Display = ({value}) => {
  return (
    <div className='w-full h-16 bg-gray-100 text-right p-4 text-2xl border-b border-black'>
        {value}
    </div>
  )
}

export default Display