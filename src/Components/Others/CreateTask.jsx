import React, { useContext, useState } from 'react'
import NewTask from '../TaskList/NewTask'
import { AuthContext } from '../../Context/AuthProvider'

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskDate, setTaskDate] = useState("")
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState("")

  const [userData, setUserData] = useContext(AuthContext)

  console.log(userData);
 
    const submitHandler=(e)=>{

       e.preventDefault();
  
       const task = { taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false };

    const newTask = {
  title: taskTitle,
  description: taskDescription,
  date: taskDate,
  category,
  active: false,
  newTask: true,
  failed: false,
  completed: false,
};

const data = userData;

data.forEach((elem) => {
  if (assignTo === elem.firstname) {
    elem.tasks.push(newTask); // ✅ push the correct object
    elem.taskCounts.newTask += 1;
  }
});

setUserData([...data]); // trigger re-render

        
       
     setTaskTitle('')
      setTaskDescription('')
      setTaskDate('')
      setAssignTo('')
      setCategory('')
        
    }

  return (
    <div className=''>
                <form onSubmit={(e)=>{
                  submitHandler(e);
                }} action="" className='flex flex-wrap w-full items-start justify-between '> 
                  <div className="bg-zinc-700 w-full mt-10 flex flex-col sm:flex-col md:flex-row md:justify-between lg:justify-between gap-10 p-10 items-center rounded-xl lg:px-60">

                        <div className="left">
                          <h3>Task Title</h3>  
                          <input 
                          value={taskTitle}
                           className='border-1 border-zinc-300 rounded-xl p-2' 
                           type="text"
                            placeholder="Make a UI Design" 
                            onChange={(e)=>{
                              setTaskTitle(e.target.value)
                            }} />
                          <h3>Date</h3>
                          <input value={taskDate}
                          className='border-1 border-zinc-300 rounded-xl p-2' 
                          type="date"
                           onChange={(e)=>{
                              setTaskDate(e.target.value)
                            }} /> 
                          <h3>Asign To</h3>
                          <input value={assignTo} className='border-1 border-zinc-300 rounded-xl p-2' type="text" placeholder='Employee Name' name="" id="" 
                          onChange={(e)=>{
                              setAssignTo(e.target.value)
                            }} />                          <h3>Category</h3>
                          <input value={category}
                           className='border-1 border-zinc-300 rounded-xl p-2' type="text" placeholder='design,dev,etc' name="" id=""
                          onChange={(e)=>{
                              setCategory(e.target.value)
                            }} />
                        </div>
                        <div className="right flex flex-col">
                            <h3 className=''>Description</h3>
                           <textarea value={taskDescription} cols={40} rows={10} placeholder="Give the description of the Job assigned" className=' bg-transparent placeholder:text-slate-300 resize-none border-2 rounded-xl border-white' name="" id=""
                           onChange={(e)=>{
                              setTaskDescription(e.target.value)
                            }}></textarea>
                           <button className='bg-emerald-700 px-3 py-2 mt-2 rounded-2xl w-full b'>Create Task</button>
                        </div>
                   </div>

                    
                </form>
            </div>
  )
}

export default CreateTask
