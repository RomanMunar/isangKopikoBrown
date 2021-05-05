interface ChevronIconProps extends React.SVGProps<SVGSVGElement> {
  direction?: 'up' | 'down' | 'left' | 'right'
}
const chevronIcon = ({ direction = 'down', ...props }: ChevronIconProps) => {
  const deg = {
    up: 180,
    left: '-45',
    right: '45',
    down: '0',
  }
  return (
    <svg
      style={{
        transform: `rotate(${deg[direction]}deg)`,
        transition: 'transform 300ms',
      }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      stroke-width='2'
      stroke='currentColor'
      fill='none'
      stroke-linecap='round'
      stroke-linejoin='round'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <polyline points='6 9 12 15 18 9' />
    </svg>
  )
}

export default chevronIcon
