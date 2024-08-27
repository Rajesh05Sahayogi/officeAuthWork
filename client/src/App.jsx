import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { login } from "./stores/authSlice"
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    if(localStorage.getItem("user"))
    {
      dispatch(login(localStorage.getItem("user")))
    }
  },[])
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
