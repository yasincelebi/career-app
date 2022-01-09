import React, { ReactNode } from 'react'

const Button = ({ type, text, onClick, fullWidth }: ButtonProps) => {
  return (
    <button
      className={`${type} ${fullWidth ? 'w-full' : ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button

export type buttonType = 'btn-primary' | 'btn-secondary' | string

export interface ButtonProps {
  type: buttonType
  text: ReactNode
  onClick: () => void
  fullWidth?: boolean
}
