import React from 'react'

const CreateTask = () => {
  return (
    <div >
                <form action="" className='flex flex-wrap w-full items-start justify-between'> 
                   <div className='bg-zinc-700 w-full mt-10 flex sm:gap-10 md:justify-between lg:justify-between gap-10 p-10 items-center rounded-xl  lg:px-60 '>
                        <div className="left">
                          <h3>Task Title</h3>  
                          <input className='border-1 border-zinc-300 rounded-xl p-2' type="text" placeholder="Make a UI Design" name="" id="" />
                          <h3>Date</h3>
                          <input className='border-1 border-zinc-300 rounded-xl p-2' type="date" name="" id="" />
                          <h3>Asign To</h3>
                          <input className='border-1 border-zinc-300 rounded-xl p-2' type="text" placeholder='Employee Name' name="" id="" />
                          <h3>Category</h3>
                          <input className='border-1 border-zinc-300 rounded-xl p-2' type="text" placeholder='design,dev,etc' name="" id="" />
                        </div>
                        <div className="right flex flex-col">
                            <h3 className=''>Description</h3>
                           <textarea  cols={40} rows={10} placeholder="Give the description of the Job assigned" className='bg-transparent placeholder:text-slate-300 resize-none ' name="" id=""></textarea>
                           <button className='bg-emerald-700 px-3 py-2 mt-2 rounded-2xl w-full'>Create Task</button>
                        </div>
                   </div>

                    
                </form>
            </div>
  )
}

export default CreateTask
