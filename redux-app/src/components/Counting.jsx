import React from 'react'
import { increment,decrement } from '../redux/action/CountAction'
import { useDispatch, useSelector } from 'react-redux'
function Counting() {
  const counting=useSelector(store=>store.reducer)
  const dispatch=useDispatch()
    return (
    <div className='fs-1 text-center text-dark d-flex align-items-center justify-content-center'>
         <button className='btn  btn-primary' onClick={()=>dispatch(increment())}>+</button>
         <h1 className='text-white'>{counting}</h1>
         <button className='btn  btn-primary' onClick={()=>dispatch(decrement())}>-</button>

    </div>
  )
}

export default Counting