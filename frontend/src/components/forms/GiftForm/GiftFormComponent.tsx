import { Dropzone } from '../..'

const ProductForm = () => {
  return (
    <div className='flex flex-col'>
      <div className='mx-auto'>
        <h1 className='inline my-4 text-4xl font-bold'>Upload new Gift</h1>
        <form className='flex flex-row space-x-10'>
          <div>
            <Dropzone width='250px' height='250px' />
            <div className='flex flex-col'>
              <label htmlFor='product image'>Gift Description</label>
              <textarea
                className=' h-[100px] px-5 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded text-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10'
                placeholder='Doloremque architecto nostrum ea est nulla laborum odit illum.'
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='product image'>Gift Name</label>
            <input
              type='text'
              required
              className='px-5 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded text-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10'
              placeholder='Coffee Grounds...'
            />
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductForm
