import React, { useEffect } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { setLocalStorage,getLocalStorage } from './utils/LocalStorage'

const App = () => {
  useEffect(() => {
  getLocalStorage();

  },)
  
  return (
   <>
    <Login/>
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
   </>
  )
}

export default App
