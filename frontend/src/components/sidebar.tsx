import { useUI } from '../hooks'
import clsx from 'clsx'
import { CashIcon, DashboardIcon, GiftIcon, OrderIcon } from './icons'
import { useLocation } from 'react-router'

interface SidebarItemProps {
  displayName: string
  icon: JSX.Element
  active?: boolean
  expandedSidebar?: boolean
}
const SidebarItem = ({
  displayName,
  icon,
  active,
  expandedSidebar,
}: SidebarItemProps) => {
  return (
    <div
      className={clsx(
        active && 'bg-[#003577] text-white',
        'flex items-center flex-row space-x-3 px-3 py-2 rounded hover:bg-[#003577] hover:text-white w-[180px]'
      )}
    >
      <span>{icon}</span>
      <h3
        className={clsx(
          expandedSidebar ? 'opacity-100' : 'opacity-0',
          'transform transition-opacity'
        )}
      >
        {displayName}
      </h3>
    </div>
  )
}

const sidebarItems = [
  {
    displayName: 'Dashboard',
    icon: <DashboardIcon className='w-5 h-5' />,
  },
  {
    displayName: 'Gifts',
    icon: <GiftIcon className='w-5 h-5' />,
  },
  {
    displayName: 'Orders',
    icon: <OrderIcon className='w-5 h-5' />,
  },
  {
    displayName: 'Statements',
    icon: <CashIcon className='w-5 h-5' />,
  },
]

const Sidebar = () => {
  const { expandedSidebar } = useUI()
  const { pathname } = useLocation()

  return (
    <aside
      className={clsx(
        expandedSidebar ? 'w-[180px]' : 'w-[50px]',
        'z-10 sticky top-0 h-screen bg-gray-50 transition-all border-r'
      )}
    >
      <nav className='overflow-hidden'>
        <h1
          className={clsx(
            'text-2xl font-bold text-center w-[180px] py-2 h-[40px] leading-none tracking-wide border-b',
            expandedSidebar
              ? 'translate-x-0 opacity-100'
              : '-translate-x-10 opacity-0',
            'transform transition'
          )}
        >
          A&amp;J's Gifts
        </h1>
        <ul className='py-1 mx-1 space-y-2'>
          {sidebarItems.map(({ displayName, icon }) => (
            <li key={displayName}>
              <SidebarItem
                expandedSidebar={expandedSidebar}
                active={pathname.includes(displayName.toLowerCase())}
                displayName={displayName}
                icon={icon}
              />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
