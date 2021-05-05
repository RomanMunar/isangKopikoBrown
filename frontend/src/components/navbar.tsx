import { useEffect, useState } from 'react'
import { useAuth, useUI } from '../hooks'
import { Dropdown, BellIcon, ChevronIcon, MenuIcon } from '.'
import { useMeQuery, useLogoutMutation } from '../generated/graphql'
import { Link, useHistory } from 'react-router-dom'

const Navbar = () => {
  const { toggleSidebar } = useUI()
  let history = useHistory()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { data } = useMeQuery({ onError() {} })
  const [logoutMutation] = useLogoutMutation()
  const { addUser, user, logout, authenticated } = useAuth()

  const onLogoutClick = () => {
    logoutMutation()
    logout()
    history.push('/') // Redirect to '/' route
  }

  useEffect(() => {
    if (data?.me) {
      addUser({ payload: { ...data.me } })
    }
    //eslint-disable-next-line
  }, [data])

  return (
    <div
      className={
        'flex flex-row items-center justify-between w-full px-7 bg-gray-50 border-b h-[40px]'
      }
    >
      <div className='flex flex-row space-x-2'>
        <button onClick={toggleSidebar}>
          <MenuIcon className='w-5 h-5 mx-2' />
        </button>
        <h1 className='flex-none block text-xl font-bold'>A&amp;J's Gift</h1>
      </div>
      {authenticated ? (
        <Dropdown
          dropdownMenu={
            <ul className='w-full py-2 border rounded shadow-xl bg-gray-50'>
              {['hey', 'Logout'].map((message) => (
                <li key={message}>
                  <button
                    onClick={onLogoutClick}
                    className='text-left w-full px-2 rounded hover:text-white hover:bg-[#003476]'
                  >
                    {message}
                  </button>
                </li>
              ))}
            </ul>
          }
          open={dropdownOpen}
          setOpen={setDropdownOpen}
        >
          <button>
            <div className='flex flex-row space-x-2'>
              <BellIcon className='w-5 h-5 mx-2' />
              <img
                src='https://www.digitalocean.com/assets/community/icons/default-avatar-b0661a7966658c06c3c32b6610fd1dbabb680c147a1ea0039be79ffba067154c.png'
                alt='my profile'
                className='w-6 h-6 rounded-full'
              />
              <span>{user.email?.split('@')[0]}</span>
              <ChevronIcon
                direction={dropdownOpen ? 'up' : 'down'}
                className='w-5 h-5 mx-2'
              />
            </div>
          </button>
        </Dropdown>
      ) : (
        <div className='flex flex-row space-x-2'>
          <Link to='/login'>
            <span className='flex items-center justify-center px-5 py-1 font-bold text-blue-800 border border-blue-600 rounded-md hover:bg-blue-200'>
              Login
            </span>
          </Link>
          <Link to='/signup'>
            <span className='flex items-center justify-center px-5 py-1 font-bold text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700'>
              Signup
            </span>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
