import React from 'react'

const AddEmployee = () => {
  return (
    <div>
        {/* Name */}
        <div>
        <label for="name" class="block text-gray-600 font-medium mb-1">Name</label>
        <input 
          type="text" 
          id="name" 
          placeholder="Enter your name" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
    {/* EMail */}
      <div>
        <label for="email" class="block text-gray-600 font-medium mb-1">Email</label>
        <input 
          type="email" 
          id="email" 
          placeholder="Enter your email" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      {/* phone */}
      <div>
        <label for="phone" class="block text-gray-600 font-medium mb-1">Phone</label>
        <input 
          type="text" 
          id="phone" 
          placeholder="Enter your phone number" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
          type="reset" 
          class="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Clear
        </button>
        <button 
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
