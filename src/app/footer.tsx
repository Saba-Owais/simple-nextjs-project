import React from 'react'

const Footer = () => {
  return (
    <div>
            <footer className=" bg-purple-500 text-black py-4 w-[95%] m-auto rounded-md">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">©copyright {new Date().getFullYear()} , sabaowais22@gmail.com. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mb-2">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Contact Us</a>
          </div>
          <p className="text-sm">
            Follow us on:
            <a href="#" className="hover:text-gray-400 ml-1">Facebook</a>,
            <a href="#" className="hover:text-gray-400 mx-1">Twitter</a>,
            <a href="#" className="hover:text-gray-400">Instagram</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
