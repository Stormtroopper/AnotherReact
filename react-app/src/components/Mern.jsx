import React from 'react'
import { useMernHook } from '../context/MernContext';
function Mern() {
    let {courses,setCourse}=useMernHook();
  return (
    <div>
       
        <p className='text-center'>
            {courses.map(e=>{
                return <li>{e}</li>
            })}
        </p>
       
    </div>
  )
}

export default Mern