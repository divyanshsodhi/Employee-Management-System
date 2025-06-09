import React from 'react'

const AcceptTask = ({data}) => {
    console.log()
  return (
     <div className='h-full w-[300px] rounded-2xl bg-red-400 p-5 flex-shrink-0 '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>
            <div className='flex justify-between m-2 '>
                <button className='bg-green-700 py-1 px-2 text-sm rounded-lg'>Mark as Completed</button>
                <button  className='bg-red-700 py-1 px-2 text-sm rounded-lg'>Mark as Failed</button>
            </div>
      </div>
  )
}

export default AcceptTask
