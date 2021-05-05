import clsx from 'clsx'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const activeStyle = {
  borderColor: '#2196f3',
}

const acceptStyle = {
  borderColor: '#00e676',
}

const rejectStyle = {
  borderColor: '#ff1744',
}

interface DropzoneProps {
  width: number | string
  height: number | string
}

interface File {
  name: string
  preview: string
}

const DropzoneComponent = ({ width, height }: DropzoneProps) => {
  const [file, setFile] = useState<[File]>()

  const onDrop = useCallback((acceptedFile) => {
    setFile(
      Object.assign(acceptedFile, {
        preview: URL.createObjectURL(file),
      })
    )
    //eslint-disable-next-line
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/jpeg, image/png',
  })

  // clean up
  useEffect(
    () => () => {
      if (file) file.forEach((file) => URL.revokeObjectURL(file.preview))
    },
    [file]
  )

  const style = useMemo(
    () => ({
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  )

  return (
    <section className='flex flex-row justify-between'>
      <div
        {...getRootProps({ style })}
        className='flex flex-col items-center p-4 text-gray-600 transition-all border-2 border-gray-200 border-dashed bg-gray-50'
        style={{
          width,
          height,
        }}
      >
        {file ? (
          file
        ) : (
          <>
            <input
              {...getInputProps()}
              className={clsx(
                isDragActive && '#2196f3',
                isDragAccept && '#00e676',
                isDragReject && '#ff1744'
              )}
            />
            <div>Drag and drop your images here.</div>
          </>
        )}
      </div>
    </section>
  )
}

export default DropzoneComponent
