import Link from 'next/link'
import React from 'react'
import Logo from '../Logo/Logo'

const Header = () => {
  return (
    <nav className="sticky top-0 z-20 w-full backdrop-blur flex-none transition-colors duration-500  bg-gray-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex py-4  mx-4 lg:mx-0">
          <div className="flex justify-between items-center">
            <a href="#" className="font-bold text-xl text-indigo-600">
              <Logo dark={true} />
            </a>
            <button
              className="border  border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div
            className="hidden md:flex flex-col md:flex-row ml-auto mt-3 md:mt-0 items-center"
            id="navbar-collapse"
          >
            <a
              href="#"
              className="p-2  lg:px-4 md:mx-2 text-primary rounded hover:bg-primary hover:text-white transition-colors duration-300  font-medium border-collapse"
            >
              Home
            </a>
            <a
              href="#"
              className="p-2 lg:px-4 md:mx-2 text-primary rounded hover:bg-primary hover:text-white transition-colors duration-300   font-medium border-collapse"
            >
              Jobs
            </a>
            <a
              href="#"
              className="p-2 lg:px-4 md:mx-2 md:ml-3 text-white rounded bg-primary font-medium border-collapse"
            >
              Sign In
            </a>
            <Link href="/register">
              <a
                href="#"
                className="p-2 lg:px-4 md:mx-2 md:ml-3 text-white rounded bg-primary font-medium border-collapse"
              >
                Register
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header
