import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({children,authentication=true}){
    const navigate=useNavigate()
    const authSatus=useSelector(state=>state.auth.status)

    useEffect(()=>{
        if(authentication && authSatus !==authentication){
            navigate("/login")
        }
        else if(!authentication && authSatus !==authentication){
            navigate(("/dashboard"))
        }
    },[authSatus,navigate,authentication])
    return <>
    {children}
    </>
}