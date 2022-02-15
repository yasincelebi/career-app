import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const useModal = (
  initialMode: boolean
): [() => void, boolean, Dispatch<SetStateAction<boolean>>] => {
  const [visible, setVisible] = useState<boolean>(initialMode)

  const toggle = () => {
    setVisible(!visible)
  }

  useEffect(() => {
    console.log('useModal: visible', visible)
  }, [visible])

  return [toggle, visible, setVisible]
}

export default useModal
