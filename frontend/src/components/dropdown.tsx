import clsx from 'clsx'
import { Dispatch, ReactNode, SetStateAction } from 'react'

interface DropdownProps {
  open?: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  dropdownMenu: JSX.Element
  children: ReactNode
}
const Dropdown = ({ open, setOpen, children, dropdownMenu }: DropdownProps) => {
  const toggleMenu = () => setOpen((p) => !p)

  return (
    <>
      <button
        onClick={toggleMenu}
        className={clsx(
          'fixed inset-0 z-40 w-screen h-screen outline-none',
          !open && 'hidden'
        )}
      />
      <div className='relative'>
        <div onClick={toggleMenu}>{children}</div>
        <div
          className={clsx(
            'absolute z-50 transition transform w-full mt-2 flex items-center'
          )}
          style={{
            transform: `translateY(${open ? 0 : '-100vh'})`,
          }}
        >
          {dropdownMenu}
        </div>
      </div>
    </>
  )
}

export default Dropdown
