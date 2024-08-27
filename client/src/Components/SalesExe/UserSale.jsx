import React from 'react'
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import { addUser } from '../../stores/userVerySlice'
const UserSale = ({user}) => {
  const dispatch=useDispatch()
  const handleClick=()=>{
   dispatch(addUser(user))
   localStorage.setItem("ArrpoveUser",JSON.stringify(user))
  }
  return (
    <div className='bg-blue-50 m-3 p-4 relative'>
        <div>
            <div>
                {/* Flex container for positioning buttons at the top-right corner */}
                <div className='flex justify-end space-x-2 absolute top-2 right-2'>
                  <button className='bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600'
                  onClick={handleClick}>
                  <Link to="/clientCreation"
                        className="text-white"
                  >
                   Approve
                  </Link>
                  </button>
                  <button className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600'>
                    Reject
                  </button>
                </div>
                {/* Content section after the buttons */}
                <div className='mt-12'>
                    <p>{`Name: ${user.name}`}</p>
                    <p>{`Email: ${user.email}`}</p>
                    <p>{`Phone No: ${user.phoneNo}`}</p>
                    <p>{`Description: ${user.description}`}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserSale
