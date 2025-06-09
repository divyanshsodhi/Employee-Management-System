import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { setLocalStorage,getLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

  const [user, setuser] = useState(null);
const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext);

  useEffect(() => {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (loggedInUser && userData) {
    const parsed = JSON.parse(loggedInUser);
    if (parsed.role === 'employee') {
      const updatedUser = userData.find(u => u.email === parsed.data.email);
      setLoggedInUserData(updatedUser);
    }
  }
}, [userData]);
  

  

 const handleLogin = (email,password)=>{
      if(email === 'admin@me.com' && password == '123'){
        setuser('admin');
        localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
      }else if (userData){
        const employee= userData.find((e)=> email == e.email && e.password == password);
        if(employee){
          setuser('employee');
          setLoggedInUserData(employee);
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}));
        }
      }
      else{
        alert('Invalid Credentials');
      }
 }


  return (
   <>
    {!user ? <Login handleLogin = {handleLogin}/>: ""}
    {user === 'admin'? <AdminDashboard changeUser ={setuser}/> : (user == 'employee'? <EmployeeDashboard changeUser ={setuser} data = {loggedInUserData} /> : null )
}
</>
  )

}
export default App
