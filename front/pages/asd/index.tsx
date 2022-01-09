import React from 'react'
import { CSSTransition } from 'react-transition-group'

import Modal from '../../components/shared/Modal/Modal'

import useModal from '../../src/hooks/useModal'

import './deneme.module.css'

import SignInForm from '../../components/signIn'

const Asd = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { toggle, visible } = useModal()

  return (
    <div className="App">
      <button onClick={toggle}>Show Modal</button>
      <CSSTransition in={visible} timeout={2000} classNames="alert">
        <Modal visible={visible} toggle={toggle}>
          <SignInForm />
        </Modal>
      </CSSTransition>

      <button className="btn btn-primary">asd</button>
    </div>
  )
}

export default Asd
