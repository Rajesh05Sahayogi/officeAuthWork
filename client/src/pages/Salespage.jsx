import React, { useEffect, useState } from 'react'
import SalesPr from '../Components/SalesExe/SalesPr'
import axios from 'axios';


const Salespage = () => {
const[alluser,setAllUser]=useState([])
const fetchAllUsers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_URL}/api/contact`);
      setAllUser([...response.data.contacts])
    } catch (error) {
      // Handling network errors
      if (error.message && error.message.includes('Network Error')) {
        console.error('Network error: Please check your internet connection.');
      }
  
      // Handling timeout errors
      if (error.code === 'ECONNABORTED') {
        console.error('Request timed out. Please try again later.');
      }
  
      // Handling HTTP errors
      if (error.response) {
        console.error('Error status code:', error.response.status);
        console.error('Error message:', error.response.data.message || 'An error occurred.');
        
        if (error.response.status === 400) {
          console.error('Bad Request: Please check your request parameters.');
        } else if (error.response.status === 404) {
          console.error('Not Found: The resource you are looking for does not exist.');
        } else if (error.response.status === 500) {
          console.error('Server Error: Please try again later.');
        }
      } else {
        console.error('An unknown error occurred:', error.message);
      }
    }
  };
  
  useEffect(()=>{
  fetchAllUsers();
  },[])
  return (
    <div>
        <SalesPr alluser={alluser}/>
    </div>
  )
}

export default Salespage