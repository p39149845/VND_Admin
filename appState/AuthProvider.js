import React, { createContext, useState, useEffect } from "react"
import Router from "next/router"
import Cookies from "js-cookie"

export const AuthContext = createContext()

const AuthProvider = ({ children, adminData }) => {
  const [admin, setAdmin] = useState(adminData)

  useEffect(() => {
    const syncLogout = e => {
      if (e.key === "logout") {
        setAdmin(null)
        Router.push("/")
      }
    }

    window.addEventListener("storage", syncLogout)

    return () => {
      window.removeEventListener("storage", syncLogout)
      window.localStorage.removeItem("logout")
    }
  }, [])

  const setAuthAdmin = adminInfo => setAdmin(adminInfo)

  const signout = () => {
    Cookies.remove("jwt")
    setAdmin(null)
    localStorage.setItem("logout", Date.now())
    Router.push("/signIn")
  }

  return (
    <AuthContext.Provider value={{ admin, setAuthAdmin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider