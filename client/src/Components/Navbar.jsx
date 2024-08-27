import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../stores/authSlice';
import { useDispatch } from 'react-redux';
const Navbar = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const { userData } = useSelector((state) => state.auth);
  const handleLogout=()=>{
    dispatch(logout())
    localStorage.clear()
    navigate("/login")
  }
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-end space-x-4">
        {userData ? (
          <>
            <Link to="/dashboard" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              Dashboard
            </Link>
            <button className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              Login
            </Link>
            <Link to="/contactUs" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              Contact Us
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
