import { ReactNode } from 'react'
import { AuthProvider } from './useAuth'
import { UIProvider } from './useUI'

export { default as useAuth } from './useAuth'

export { default as useUI } from './useUI'

export const ManagedContexts = ({ children }: { children: ReactNode }) => {
  return (
    <UIProvider>
      <AuthProvider>{children}</AuthProvider>
    </UIProvider>
  )
}
