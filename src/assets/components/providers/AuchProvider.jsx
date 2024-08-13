import { createContext, useState } from "react";
import React from 'react'
export const AuthContext = createContext()
const AuchProvider = ({children}) => {
    const [user , setUser] = useState(null)
  return (
    <AuthContext.Provider value={{user , setUser}}>
        {children}
    </AuthContext.Provider>
  )
}
export default AuchProvider
