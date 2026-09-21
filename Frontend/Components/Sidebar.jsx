import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {


let navigate= useNavigate()


  return (
    <div className='bg-blue-800 h-full w-60 absolute flex justify-center'>
      <div className="flex flex-col ">

        <button onClick={function(){
                        navigate("/ProjectCreate")
                    }}
        className='text-gray-200 absolute top-35 ml-5'>Project Create</button>
 
                    <button onClick={function(){
                        navigate("/AllProject")
                    }}
                    className='text-gray-200 absolute top-45 ml-5'>All Project</button>

                    
<button onClick={function(){
                        navigate("/MemberCreate")
                    }}
                    className='text-gray-200 absolute top-55 ml-5'>Member Create</button>





        <button onClick={function(){
                        navigate("/")
                    }}
        className='h-10 w-50 mt-140 rounded-lg border border-white font-bold text-white bg-gray-50/20 hover:bg-gray-50/30'>LogOut</button>

      </div>
    </div>
  )
}

export default Sidebar
