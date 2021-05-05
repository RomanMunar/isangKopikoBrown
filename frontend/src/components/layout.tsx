import { ReactNode } from 'react'
import { Navbar, Sidebar } from '.'

interface LayoutProps {
  children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex justify-between'>
      <Sidebar />
      <div className='flex-grow min-h-screen transition-all bg-gray-100'>
        <Navbar />
        <main>{children}</main>
        <div className='h-screen'></div>
        <div className='h-screen'></div>
      </div>
    </div>
  )
}

export default Layout
