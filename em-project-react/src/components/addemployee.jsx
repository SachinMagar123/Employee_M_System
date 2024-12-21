import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const AddEmployee = () => {

  const [employee , setEmployee] = useState({
    name:'',
    email:'',
    phone:''
  });

  const handlechange = (e) =>{
    const value = e.target.value;
       setEmployee({
      ...employee,[e.target.name]:value
    })
  }

  const reset =(e) =>{
    e.preventDefault();
    setEmployee({
      name:"",
      email:"",
      phone:""
    })
  }
  
  const navigate = useNavigate()

  return (
    <div class="w-1/2 mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        {/* Name */}
        <div>
        <label for="name" class="block text-gray-600 font-medium mb-1">Name</label>
        <input 
          type="text" 
          id="name"
          name="name" 
          placeholder="Enter your name" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={employee.name}
          onChange={handlechange}
        />
      </div>
      
    {/* EMail */}
      <div>
        <label for="email" class="block text-gray-600 font-medium mb-1">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email"
          placeholder="Enter your email" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={employee.email}
          onChange={handlechange}
          />
      </div>
      
      {/* phone */}
      <div>
        <label for="phone" class="block text-gray-600 font-medium mb-1">Phone</label>
        <input 
          type="text" 
          id="phone"
          name="phone" 
          placeholder="Enter your phone number" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={employee.phone}
          onChange={handlechange}
        />
      </div>
      
    {/* buttons */}
      <div class="flex justify-between">
        <button 
          type="submit" 
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Save
        </button>

        <button 
        onClick={reset}
          type="reset" 
          class="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Clear
        </button>

        <button 
        onClick={()=>{navigate("/")}}
          type="button" 
          class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Cancel
        </button>
      </div>
      </div>
  )
}

export default AddEmployee
