import React from 'react'

const Layout = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[] | null
}) => {
  return <div className="relative">{children}</div>
}

export default Layout
