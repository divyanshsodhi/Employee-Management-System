import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-full w-[300px]  rounded-2xl bg-yellow-400 p-5 flex-shrink-0 '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>
             <div className='m-2 flex justify-center'>
            <button className='bg-red-600  px-2 py-1 rounded-lg text-sm'>Failed</button>
            </div>
      </div>
  )
}

export default FailedTask
