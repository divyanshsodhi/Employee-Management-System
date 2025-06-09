import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';


export const AuthContext = createContext();



const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null);

  // localStorage.clear();

   useEffect(() => {
    // ✅ Seed localStorage if it doesn't already have the data
    if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
      setLocalStorage(); // this will add employees and admin to localStorage
    }

    const {employees} = getLocalStorage();
    setUserData(employees);
  }, []);

  

  return (
    <div>
        <AuthContext.Provider value={[userData, setUserData]} >
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
