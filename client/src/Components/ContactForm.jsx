import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    description: '',
  });

  const [err, setErr] = useState('');
  const [succ, setSucc] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phoneNo) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and phone number
    if (!validateEmail(formData.email)) {
      setErr('Please enter a valid email address.');
      return;
    }

    if (!validatePhone(formData.phoneNo)) {
      setErr('Please enter a valid 10-digit phone number.');
      return;
    }

    // If validation passes, clear error and proceed with form submission
    setErr('');
    axios.post(`${import.meta.env.VITE_URL}/api/contact/sendContact`, formData)
      .then(response => {
        setSucc('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phoneNo: '',
          description: '',
        });
      })
      .catch(error => setErr('Error sending message.'));
  };

  return (
    <div className="w-1/2 mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNo" className="block text-gray-700 font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            name="phoneNo"
            id="phoneNo"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.phoneNo}
            onChange={handleChange}
            placeholder="Your Phone Number"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            name="description"
            id="description"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.description}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
      <div className='text-red-500 flex justify-center mt-4'>
        {succ && <p className="text-green-500">{succ}</p>}
        {err && <p>{err}</p>}
      </div>
      <div className='mt-2'>
      <p className='text-green-500'>
        <strong>Note:</strong>
         If your login request is approved by our backend, your phone number will be used as your password. Please ensure that the phone number you provide is correct and accessible.
      </p>
      </div>
    </div>
  );
};

export default ContactForm;
