import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';


export const AuthContext = createContext();



const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null);

   useEffect(() => {
    // ✅ Seed localStorage if it doesn't already have the data
    if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
      setLocalStorage(); // this will add employees and admin to localStorage
    }

    const {employees, admin} = getLocalStorage();
    setUserData({employees, admin});
  }, []);

  

  return (
    <div>
        <AuthContext.Provider value={userData}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
