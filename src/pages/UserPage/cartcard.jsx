import React from "react";

function Cartcard({title}) {
  return (
    
      <div className="justify-between mb-4 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img
          src="https://images.unsplash.com/photo-1571988840298-3b5301d5109b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt="product-image1"
          className="w-full rounded-lg sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-2xl px-20 font-bold text-gray-900">{title}</h2>
            <p className="mt-1 text-xl px-20 py-5 text-gray-700">Author Name</p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">Days left: X days</p>
          </div>
        </div>
      </div>

  );
}

export default Cartcard;
