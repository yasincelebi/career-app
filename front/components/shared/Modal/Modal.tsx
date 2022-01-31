import React, { ReactNode } from 'react'

import Button from '../Button/Button'
import Portal from '../Portal/Portal'
import './stil.module.css'
import { useClickAway } from 'react-use'

export default function Modal({
  visible,
  toggle,
  children,
  buttons,
}: {
  visible: boolean
  toggle: () => void
  children: ReactNode
  buttons?: ModalButtons
}) {
  const dialogRef = React.createRef<HTMLDivElement>()

  useClickAway(dialogRef, () => {
    visible && toggle()
  })

  const element = (): JSX.Element => {
    return (
      <>
        {visible && (
          <>
            <div className="fixed inset-0 flex items-center justify-center z-40 h-full w-full bg-transparent backdrop-blur-[2px] ">
              <div
                ref={dialogRef}
                className="max-h-[90%] overflow-auto bg-white"
              >
                {children}
                <div className="buttons p-5">
                  {buttons && <ModalButtons buttons={buttons} />}
                </div>
              </div>
            </div>
            <div className="overlay z-30 bg-black opacity-60 w-full h-full absolute inset-0  " />
          </>
        )}
      </>
    )
  }

  return (
    <>
      <Portal element={element()} visible={visible} />
    </>
  )
}

export interface ModalProps {
  visible: boolean
  toggle: () => void
  children: ReactNode
  buttons?: ModalButtons[]
  fullWidthButtons?: boolean
}

export type ModalButtons = {
  [key: string]: {
    text: string
    onClick: () => void
    type: 'btn-primary' | 'btn-secondary'
    fullWidth?: boolean
  }
}

export function ModalButtons({ buttons }: { buttons: ModalButtons }) {
  return (
    <div className="flex justify-end">
      {Object.entries(buttons).map(([key, button]) => (
        <Button key={key} {...button} />
      ))}
    </div>
  )
}
