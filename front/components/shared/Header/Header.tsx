import Link from 'next/link'
import React, { useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import { UserContext } from '../../../src/context/UserContext/UserProvider'
import useModal from '../../../src/hooks/useModal'
import RegisterForm from '../../register'
import SignInForm from '../../signIn'
import Logo from '../Logo/Logo'
import Modal from '../Modal/Modal'

const Header = () => {
  const { toggle, visible } = useModal()
  const { state, dispatch } = useContext(UserContext)
  const [openedModal, setOpenedModal] = React.useState('')
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

            {!state.loginUser && (
              <>
                <div
                  onClick={() => {
                    toggle()
                    setOpenedModal('signIn')
                  }}
                  className="p-2 lg:px-4 md:mx-2 md:ml-3 text-white rounded bg-primary font-medium border-collapse"
                >
                  Register
                </div>

                <div
                  onClick={() => {
                    toggle()
                    setOpenedModal('register')
                  }}
                  className="p-2 lg:px-4 md:mx-2 md:ml-3 text-white rounded bg-primary font-medium border-collapse"
                >
                  Register
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <CSSTransition in={visible} timeout={2000} classNames="alert">
        <Modal visible={visible} toggle={toggle}>
          {openedModal === 'signIn' ? (
            <SignInForm />
          ) : (
            <RegisterForm handleSignIn={() => setOpenedModal('signIn')} />
          )}
        </Modal>
      </CSSTransition>
    </nav>
  )
}
export default Header
