import React from 'react'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%]  flex items-center flex-shrink-0 gap-5  overflow-x-auto  flex-nowrap rounded-xl  justify-start w-full py-4  mt-10 '>
      <div className='h-full w-[300px] rounded-2xl bg-red-400 p-5 flex-shrink-0 '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
                <h4 className='text-sm'>20 feb, 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deserunt cupiditate perspiciatis, ipsam omnis sed dolorum, error dolor rerum ipsum maiores quasi pariatur quos eos deleniti, at architecto molestiae magnam?</p>
      </div>
      <div className='h-full w-[300px]  rounded-2xl bg-green-400 p-5 flex-shrink-0 '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
                <h4 className='text-sm'>20 feb, 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deserunt cupiditate perspiciatis, ipsam omnis sed dolorum, error dolor rerum ipsum maiores quasi pariatur quos eos deleniti, at architecto molestiae magnam?</p>
      </div>
      <div className='h-full w-[300px]  rounded-2xl bg-blue-400 p-5 flex-shrink-0 '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
                <h4 className='text-sm'>20 feb, 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deserunt cupiditate perspiciatis, ipsam omnis sed dolorum, error dolor rerum ipsum maiores quasi pariatur quos eos deleniti, at architecto molestiae magnam?</p>
      </div>
      <div className='h-full w-[300px]  rounded-2xl bg-yellow-400 p-5 flex-shrink-0 '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
                <h4 className='text-sm'>20 feb, 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deserunt cupiditate perspiciatis, ipsam omnis sed dolorum, error dolor rerum ipsum maiores quasi pariatur quos eos deleniti, at architecto molestiae magnam?</p>
      </div>
      
     
      
    </div>
  )
}

export default TaskList
