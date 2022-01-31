import React, { createContext, useContext, useState } from 'react'

export const LoadingContext = React.createContext<{
  isLoading: boolean
  setLoading: React.Dispatch<any>
}>({
  isLoading: false,
  setLoading: (value: boolean) => {},
})

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setLoading] = useState(false)
  const value = { isLoading, setLoading }
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  )
}
