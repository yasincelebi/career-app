import React from 'react'
import { useLoading } from '../../../src/hooks/useLoading'
import Spinner from '../Spinner/Spinner'

const Layout = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[] | null
}) => {
  const { isLoading } = useLoading()
  return (
    <div className="relative">
      {isLoading && <Spinner />}
      {children}
    </div>
  )
}

export default Layout
