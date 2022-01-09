import React, { ReactNode, useEffect } from 'react'
import ReactDOM, { createPortal } from 'react-dom'
const Portal = ({
  element,
  appendTo,
  visible,
  onMounted,
  onUnmounted,
  children,
}: PortalProps): any => {
  const [mounted, setMounted] = React.useState(visible)
  const isBrowser = typeof window !== 'undefined'
  useEffect(() => {
    if (hasDOM() && !mounted) {
      setMounted(true)
      onMounted && onMounted()
    }
    return () => {
      setMounted(false)
      onUnmounted && onUnmounted()
    }
  }, [])
  const el = element || children
  const hasEl = element && mounted

  if (el && hasEl && isBrowser) {
    const appendToEl = appendTo || document.body
    return appendToEl === 'self'
      ? element
      : ReactDOM.createPortal(element, appendToEl)
  }
  return null
}

export default Portal

export interface PortalProps {
  element: ReactNode | null
  appendTo?: HTMLElement | 'self'
  visible: boolean
  onMounted?: () => void
  onUnmounted?: () => void
  children?: ReactNode
}

function hasDOM() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  )
}
