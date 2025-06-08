import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { setLocalStorage,getLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

  const [user, setuser] = useState(null);

  const authData = useContext(AuthContext);

  useEffect(() => {
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser){
        setuser(loggedInUser.role);
      }
    }
  }, [authData])
  

 const handleLogin = (email,password)=>{
      if(email === 'admin@me.com' && password == '123'){
        setuser('admin');
        localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
      
      } else if(authData && authData.employees.find((e)=> email == e.email && password == e.password)){
          setuser('employee');
          localStorage.setItem("loggedInUser",JSON.stringify({role:'employee'}))
      }
      else{
        alert('Invalid Credentials');
      }
 }


  return (
   <>
    {!user ? <Login handleLogin = {handleLogin}/>: ""}
    {user === 'admin'? <AdminDashboard/> : <EmployeeDashboard/>}
   </>
  )
}

export default App
