import React from 'react'

const Footer = () => {
  return (
    <div>
        
      <footer className="mt-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Calculator App | All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer