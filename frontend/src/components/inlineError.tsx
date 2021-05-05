import clsx from 'clsx'

interface InlineErrorProps {
  message: string
  fieldID: string
}
const InlineError = ({ message, fieldID }: InlineErrorProps) => {
  return message ? (
    <p
      id={`${fieldID}_error`}
      className={'flex flex-row items-center space-x-2 text-sm text-red-600'}
    >
      <svg
        className='w-4 h-4 rounded-full'
        fill='currentColor'
        viewBox='0 0 20 20'
        focusable='false'
        aria-hidden='true'
      >
        <path d='M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM9 9a1 1 0 0 0 2 0V7a1 1 0 1 0-2 0v2zm0 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0z'></path>
      </svg>
      {message}
      {fieldID && <span className='sr-only'>{fieldID} is invalid</span>}
    </p>
  ) : null
}

export default InlineError
