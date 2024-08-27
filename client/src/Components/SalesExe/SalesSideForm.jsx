import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser, addUser } from '../../stores/userVerySlice';
import axios from 'axios';

const SalesSideForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedUser = localStorage.getItem("ArrpoveUser");
    if (savedUser) {
      dispatch(addUser(JSON.parse(savedUser)));
    }
  }, []);

  const { currUser } = useSelector((state) => state.userVery);

  const [formData, setFormData] = useState({
    userType: '',
    role: '',
    name: '',
    email: '',
    password: '',
    organizationType: '',
    employeeType: '',
    professionType: '',
    orgAdmins: []
  });

  useEffect(() => {
    // Update formData whenever currUser is populated
    if (currUser) {
      setFormData({
        ...formData,
        name: currUser.name || '',
        email: currUser.email || '',
        password: currUser.phoneNo || '',
      });
    }
  }, [currUser]); // Add currUser as a dependency

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post(`${import.meta.env.VITE_URL}/api/users/register`, formData)
      .then(response => alert('User registered successfully'))
      .catch(error => alert('Error registering user'));
    localStorage.clear();
    dispatch(clearUser());
  };

  if (!currUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">User Type</label>
          <select
            name="userType"
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select User Type</option>
            <option value="Business">Business</option>
            <option value="Professional">Professional</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">Role</label>
          <select
            name="role"
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Role</option>
            <option value="SuperAdmin">SuperAdmin</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {formData.userType === 'Business' && (
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700">Organization Type</label>
            <input
              type="text"
              name="organizationType"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {formData.role === 'User' && formData.userType === 'Business' && (
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700">Employee Type</label>
            <select
              name="employeeType"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Employee Type</option>
              <option value="On Record">On Record</option>
              <option value="Off Record">Off Record</option>
            </select>
          </div>
        )}

        {formData.userType === 'Professional' && (
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700">Profession Type</label>
            <input
              type="text"
              name="professionType"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {formData.role === 'SuperAdmin' && formData.userType === 'Business' && (
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700">Org Admins</label>
            <select
              name="orgAdmins"
              multiple
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {/* Render options dynamically here */}
            </select>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SalesSideForm;
