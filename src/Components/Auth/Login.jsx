import React, { useState } from 'react'

const Login = ({handleLogin}) => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

    const submitHandler =(e)=>{
            e.preventDefault();
           handleLogin(email,password);
            setEmail("");
            setPassword('')
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center '>
        <div className="border-2 rounded-xl border-emerald-600 p-20 ">
            <form action="" onSubmit={(e)=>{
                submitHandler(e);
            }} className='flex flex-col items-center justify-center '>
                <input 
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
                value={email}
                required
                 className='border-2 border-emerald-600 px-5 py-3 rounded-full text-xl outline-none bg-transparent  placeholder:text-gray-400' type="email" name="" id="" placeholder='Enter your Email' />

                <input 
                   onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                value={password}
                required className='border-2 border-emerald-600 px-5 py-3 rounded-full text-xl outline-none bg-transparent mt-4 placeholder:text-gray-400' type="password" placeholder='Enter your Password'/>
                <button className='outline-none bg-emerald-500 mt-4 text-xl py-3 px-5 rounded-3xl '>Login</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
